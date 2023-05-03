import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

import { storage } from '../firebase/firebase';
const storageRef = storage.ref().child('images');

export default function AddModal(props) {
  // item's reference in Cloud Firestore DB.
  const [itemRef, setItemRef] = useState('');
  const [allergenItems, setAllergenItems] = useState([]);
  // const [imageFile, setImageFile] = useState(null);
  // const [imageURL, setImageURL] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const getAllergens = (value) => {
    const properValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    if (!allergenItems.includes(properValue)) {
      setAllergenItems([...allergenItems, properValue]);
      console.log(allergenItems);
    }
  };

  const removeAllergen = (value) => {
    var filteredItems = [];

    allergenItems.forEach((item) => {
      if (!(item == value)) {
        filteredItems.push(item);
      }
    });

    console.log(filteredItems)
    setAllergenItems(filteredItems)
  };

  const closeSelf = () => {
    setAllergenItems([]);

    props.onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    formJson.allergens = allergenItems;
    pushData(formJson);
    console.log(formJson)

    props.onClose();

    setAllergenItems([]);
    e.target.reset();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageName = file.name;
    const imageRef = storageRef.child(imageName);
    await imageRef.put(file);
    const url = await imageRef.getDownloadURL();
    setSelectedImage(url);

    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   setImageFile(file); 
    //   setImageURL(reader.result);
    // };

    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };

  return (
    <div className={`modal fade ${props.showModal ? 'show d-block' : ''}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Item</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeSelf}></button>
          </div>
          <div className="modal-body">
            <p></p>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="name" placeholder={props.itemName} required />
                <label htmlFor="name">Item Name</label>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="dailyLimit" placeholder={props.dailyLimit} required />
                    <label htmlFor="dailyLimit">Limit Per Day</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="personalLimit" placeholder={props.personLimit} />
                    <label htmlFor="personalLimit">Limit Per Person (Optional)</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" name="stock" placeholder="" required />
                    <label htmlFor="stock">Stock</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">In stock</label>
                    <input className="form-check-input" type="checkbox" name="inStock" defaultChecked={true} />
                  </div>
                </div>
              </div>

              {/* Temporary way of inputting images through URL */}
              {/* <div className="form-floating mb-3">
                <input type="text" className="form-control" name="image_url" />
                <label htmlFor="image_url">Image URL</label>
              </div> */}
              <div className="form-floating mb-3">
                <input type="file" accept="image/*" className="form-control" name="image_file" onChange={handleImageUpload}/>
                <label htmlFor="image_url">Upload Image</label>
              </div>
              {/* <div className="form-floating mb-3">
                <input
                  type="file" accept="image/*" className="form-control" name="image_file" onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
                />
                <label htmlFor="image_file">Upload Image</label>
              </div> */}


              <InputMultiple onValueChange={getAllergens}></InputMultiple>

              {allergenItems.map((allergen, index) => (
                <AllergenBadge key={index} label={allergen} callback={removeAllergen} />
              ))}

              <hr />

              <button type="button" style={{ marginLeft: '250px' }} className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeSelf}>Cancel</button>
              <button type='submit' style={{ marginLeft: '10px', backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} className="btn btn-primary">Save changes</button>
            </form>

          </div>
        </div>

      </div>
    </div >
  );
}

function pushData(data) {
  try {
    const docRef = addDoc(collection(db, "foodItems"), {
      // allergens: data.allergens,
      // inStock: data.inStock ? true : false,
      // limitPerDay: data.dailyLimit,
      // limitPerPerson: data.personalLimit,
      // name: data.name,
      // quantity: data.stock,
      // image_url: data.image_url
      ...data,
      image_url: selectedImage
    });
    setItemRef(docRef.id);
  } catch (error) {
    console.error('unable to add doc (error): ', error);
  }
}

function InputMultiple(props) {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    console.log(inputValue);

    if (inputValue != '') {
      props.onValueChange(inputValue);
      setInputValue('');
    }

  }

  return (
    <div className="input-group mb-3">
      <div className="form-floating">
        <input type="text" className="form-control" name="allergen" placeholder="" value={inputValue} onChange={handleInputChange} />
        <label htmlFor="allergen">Allergen</label>
      </div>
      <button onClick={handleButtonClick} className='btn btn-secondary'>Add Allergen</button>
    </div>
  );
}