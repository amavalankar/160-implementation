import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

export default function AllergenInput(props) {
    const [allergenItems, setAllergenItems] = useState([]);

    const getAllergens = (value) => {
      const properValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (!allergenItems.includes(properValue)) {
        setAllergenItems([...allergenItems, properValue]);
        console.log(allergenItems);
      }

      props.callback(allergenItems)
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

      props.callback(allergenItems)
    }

    return (
        <div>
            <InputMultiple callback={getAllergens}></InputMultiple>

            {allergenItems.map((allergen, index) => (
                <AllergenBadge key={index} label={allergen} callback={removeAllergen} />
            ))}
        </div>
    );
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
        props.callback(inputValue);
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