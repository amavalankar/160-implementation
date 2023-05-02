import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

export default function AddModal(props) {
  const [itemRef, setItemRef] = useState('');
  const [allergenItems, setAllergenItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const getAllergens = (value) => {
    const properValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    if (!allergenItems.includes(properValue)) {
      setAllergenItems([...allergenItems, properValue]);
    }
  };

  const removeAllergen = (value) => {
    const filteredItems = allergenItems.filter((item) => item !== value);
    setAllergenItems(filteredItems);
  };

  const closeSelf = () => {
    setAllergenItems([]);
    setItemName('');
    props.onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.allergens = allergenItems;
    formJson.name = itemName || formJson.name;
    await pushData(formJson);
    props.onClose();
    setAllergenItems([]);
    setItemName('');
    form.reset();
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    const formData = new FormData();
    formData.append('image', image);
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_CLOUD_VISION_API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        requests: [
          {
            image: {
              source: {
                imageUri: imageUrl,
              },
            },
            features: [
              {
                type: 'LABEL_DETECTION',
                maxResults: 5,
              },
            ],
          },
        ],
      }),
    });
    const data = await response.json();
    const labels = data.responses[0].labelAnnotations.map((label) => label.description.toLowerCase());
    const itemName = labels.find((label) => !allergenItems.includes(label));
    setItemName(itemName);
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
              <div className="form-floating mb-3">
                <input type="text" className="form-control" name="image_url" />
                <label htmlFor="image_url">Image URL</label>
              </div>

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
  const docRef = addDoc(collection(db, "foodItems"), {
    allergens: data.allergens,
    inStock: data.inStock ? true : false,
    limitPerDay: data.dailyLimit,
    limitPerPerson: data.personalLimit,
    name: data.name,
    quantity: data.stock,
    image_url: data.image_url
  });
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
    <div class="input-group mb-3">
      <div className="form-floating">
        <input type="text" className="form-control" name="allergen" placeholder="" value={inputValue} onChange={handleInputChange} />
        <label htmlFor="allergen">Allergen</label>
      </div>
      <button onClick={handleButtonClick} className='btn btn-secondary'>Add Allergen</button>
    </div>
  );
}