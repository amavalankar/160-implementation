/* eslint-disable */
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { addDoc, collection, setDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';
import ImgUploading from '../ImgUploading';
import { exportUrl } from '../ImgUploading';

var finalUrl = ""

const updateFinalUrl = () => {
  console.log("Before: finalURL:" + finalUrl)
  console.log("Before: exportURL:" + exportUrl)

  finalUrl = exportUrl;

  console.log("After: finalURL:" + finalUrl)
  console.log("After: exportURL:" + exportUrl)
}
export default function AddModal(props) {
  // item's reference in Cloud Firestore DB.
  const [itemRef, setItemRef] = useState('');
  const [allergenItems, setAllergenItems] = useState([]);
  const defaultState = 'loading'
  const [data, setData] = useState(defaultState);
  useEffect(() => {
    onSnapshot(
      collection(db, "foodItems"),
      (snapshot) => {
        console.log(snapshot)

        const docList = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docList.push({ id, ...data })
        })

        console.log(docList)
        setData(docList);

      },
      (error) => {
        console.error(error);
      }
    );

  }, []);

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



  }

  const closeSelf = () => {
    setAllergenItems([]);

    console.log("Final URL before closing window is " + finalUrl)

    //reset the exportUrl
    finalUrl = "";


    props.onClose();



  }



  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    formJson.allergens = allergenItems;
    pushData(formJson, data);
    console.log(formJson)

    props.onClose();

    setAllergenItems([]);
    e.target.reset();



  }

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
                {/*}
                <input type="text" className="form-control" name="image_url" />
                <label htmlFor="image_url">Image URL</label>
                */}
                <ImgUploading>
                </ImgUploading>
                {/*<p>final url is {finalUrl}</p>*/}


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

function pushData(jsonData, data) {
  var found = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== undefined) {
      if (data[i].name == jsonData.name) {
        found = true;
        const docRef = updateDoc(doc(db, "foodItems", data[i].id), {
          allergens: data[i].allergens.concat(jsonData.allergens),
          inStock: jsonData.inStock ? true : false,
          limitPerDay: jsonData.dailyLimit,
          limitPerPerson: jsonData.personalLimit,
          name: data[i].name,
          quantity: parseInt(data[i].quantity) + parseInt(jsonData.stock),
          image_url: finalUrl
        });
        break;
      }
    }
  }
  if (!found) {
    const docRef = addDoc(collection(db, "foodItems"), {
      allergens: jsonData.allergens,
      inStock: jsonData.inStock ? true : false,
      limitPerDay: jsonData.dailyLimit,
      limitPerPerson: jsonData.personalLimit,
      name: jsonData.name,
      quantity: jsonData.stock,
      image_url: finalUrl//exportUrl//data.image_url
    });
  }
  //reset the exportUrl
  console.log("Final URL in pushdata before empty is " + finalUrl);
  finalUrl = "";

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

export { updateFinalUrl }