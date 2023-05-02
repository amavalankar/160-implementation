import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

export default function EditModal(props) {
    // item's reference in Cloud Firestore DB.
    const [itemRef, setItemRef] = useState('');
    const [allergenItems, setAllergenItems] = useState([]);
    const [itemName, setItemName] = useState(props.editItem.itemName || '');
    const [dailyLimit, setDailyLimit] = useState(props.editItem.limitPerDay || '');
    const [personalLimit, setPersonalLimit] = useState(props.editItem.limitPerPerson || '');
    const [quantity, setQuantity] = useState(props.editItem.quantity || '');
    const [inStock, setInStock] = useState(props.editItem.inStock || '');
    const [imageUrl, setImageUrl] = useState(props.editItem.image_url || '');
  
    useEffect(() => {
      if (props.editItem.allergens) {
        setAllergenItems(props.editItem.allergens)
      }

      if (props.editItem) {
        setItemName(props.editItem.name);
        setDailyLimit(props.editItem.limitPerDay);
        setPersonalLimit(props.editItem.limitPerPerson);
        setQuantity(props.editItem.quantity);
        setInStock(props.editItem.inStock);
        setImageUrl(props.editItem.image_url);
      }
    }, [props.editItem]);

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
  
      props.onClose();
    }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const formData = new FormData(form);
  
      const formJson = Object.fromEntries(formData.entries());
      formJson.allergens = allergenItems;
      pushData(formJson, props.editItem.id);
      console.log(formJson)
  
      props.onClose();
  
      setAllergenItems([]);
      e.target.reset();
    }

    const triggerDelete = () => {
      deleteSelf(props.editItem.id);
      props.onClose();
    }
  
    return (
      <div className={`modal fade ${props.showModal ? 'show d-block' : ''}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Item</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeSelf}></button>
            </div>
            <div className="modal-body">
              <p></p>
  
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="name" placeholder={props.itemName} value={itemName} onChange={e => setItemName(e.target.value)} required />
                  <label htmlFor="name">Item Name</label>
                </div>
  
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="dailyLimit" placeholder={props.dailyLimit} value={dailyLimit} onChange={e => setDailyLimit(e.target.value)} required />
                      <label htmlFor="dailyLimit">Limit Per Day</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="personalLimit" placeholder={props.personLimit} onChange={e => setPersonalLimit(e.target.value)} value={personalLimit} />
                      <label htmlFor="personalLimit">Limit Per Person (Optional)</label>
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" name="stock" placeholder="" value={quantity} onChange={e => setQuantity(e.target.value)} required />
                      <label htmlFor="stock">Stock</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inStock">In stock</label>
                      <input className="form-check-input" type="checkbox" name="inStock" value={inStock} onChange={e => setInStock(e.target.value)} />
                    </div>
                  </div>
                </div>
  
                <InputMultiple onValueChange={getAllergens}></InputMultiple>
  
                {allergenItems.map((allergen, index) => (
                  <AllergenBadge key={index} label={allergen} callback={removeAllergen} />
                ))}

                {/* Temporary way of inputting images through URL */}
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="image_url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                  <label htmlFor="image_url">Image URL</label>
                </div>

                <hr />
  
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeSelf}>Cancel</button>
                <button type='submit' style={{ marginLeft: '10px', backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} className="btn btn-primary">Save changes</button>
                <button type='button' style={{ marginLeft: '10px'}} className="btn btn-primary btn-danger" onClick={triggerDelete}>Delete Item</button>

              </form>
  
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  function pushData(data, docId) {
    const docRef = updateDoc(doc(db, "foodItems", docId), {
      allergens: data.allergens,
      inStock: data.inStock ? true : false,
      limitPerDay: data.dailyLimit,
      limitPerPerson: data.personalLimit,
      name: data.name,
      quantity: data.stock,
      image_url: data.image_url
    });
  }

  function deleteSelf(id) {
    const docRef = deleteDoc(doc(db, "foodItems", id));
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