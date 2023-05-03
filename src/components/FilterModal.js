import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

export default function FilterModal(props) {
  // item's reference in Cloud Firestore DB.
  const [items, setItems] = useState([]);
  const [allergenItems, setAllergenItems] = useState([]);
  const [showGlutenFree, setShowGlutenFree] = useState(false);
  const [showSoyFree, setShowSoyFree] = useState(false);
  const [showPeanutFree, setShowPeanutFree] = useState(false);

//   React.useEffect(() => {
//     // Load the items from Firebase
//     const unsubscribe = firebase.firestore().collection('foodItems')
//       .onSnapshot(snapshot => {
//         let newItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
//         // Filter the items based on the selected allergens
//         if (showPeanutFree) {
//           newItems = newItems.filter(item => !item.allergens.includes('peanuts'));
//         }
//         if (showSoyFree) {
//           newItems = newItems.filter(item => !item.allergens.includes('soy'));
//         }
//         if (showGlutenFree) {
//           newItems = newItems.filter(item => !item.allergens.includes('gluten'));
//         }
        
//         setItems(newItems);
//       });
//     return unsubscribe;
//   }, [showPeanutFree, showSoyFree, showGlutenFree]);

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

  const uncheckBoxes = () => {
    let glutenBox = document.getElementById("glutenBox");
    glutenBox.checked = false; 
    let soyBox = document.getElementById("soyBox");
    soyBox.checked = false; 
    let peanutBox = document.getElementById("peanutBox");
    peanutBox.checked = false; 
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
    pushData(formJson);
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
            <h5 className="modal-title">Filter Items</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeSelf}></button>
          </div>
          <div className="modal-body">
            <p></p>

            <form onSubmit={handleSubmit}>



              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Gluten-free</label>
                    <input id="glutenBox" className="form-check-input" type="checkbox" checked={showGlutenFree} onChange={() => setShowGlutenFree(!showGlutenFree)}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Soy-free</label>
                    <input id="soyBox" className="form-check-input" type="checkbox" checked={showSoyFree} onChange={() => setShowSoyFree(!showSoyFree)}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Peanut-free</label>
                    <input id="peanutBox" className="form-check-input" type="checkbox" checked={showPeanutFree} onChange={() => setShowPeanutFree(!showPeanutFree)}/>
                  </div>
                </div>
              </div>
              <hr />

              <button type="button" style={{ marginLeft: '250px' }} className="btn btn-secondary" data-bs-dismiss="modal" onClick={uncheckBoxes}>Reset</button>
              <button type='button' style={{ marginLeft: '10px', backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} className="btn btn-primary">View Results</button>
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