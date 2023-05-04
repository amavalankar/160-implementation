/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';
import { addDoc, collection, onSnapshot, setDoc, getFirestore, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';

export default function FilterModal(props) {
  // item's reference in Cloud Firestore DB.
  const [items, setItems] = useState([]);
//   const [query, setQuery] = useState(props.value);
  const [allergenItems, setAllergenItems] = useState([]);
  const [glutenFree, setGlutenFree] = useState(false);
  const [soyFree, setSoyFree] = useState(false);
  const [peanutFree, setPeanutFree] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
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
    let allergensFilter = [];
    if (peanutFree) {
        allergensFilter.push("Peanuts");
      }
  
      if (soyFree) {
        allergensFilter.push("Soy");
      }
  
      if (glutenFree) {
        allergensFilter.push("Gluten");
      }
      console.log(allergensFilter)

}, []);

const filteredData = glutenFree 
    ? data.filter((item) => !item.allergens.includes("Gluten")) 
    : data; 

  React.useEffect(() => {
    const itemsRef = collection(db, "foodItems");
    let allergensFilter = [];

    if (peanutFree) {
      allergensFilter.push("Peanuts");
    }

    if (soyFree) {
      allergensFilter.push("Soy");
    }

    if (glutenFree) {
      allergensFilter.push("Gluten");
    }

    const q = query(
      itemsRef,
      allergensFilter.length > 0
        ? where("allergens", "array-contains-any", allergensFilter)
        : null
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setFilteredItems(items);
    });

    return () => unsubscribe();
  }, [peanutFree, soyFree, glutenFree]);

  function handleFilter() {
    let itemsRef = collection(db, 'foodItems');
  
    if (peanutFree) {
        const filtered = items
        .filter(item => item !== null && item.name)
        .filter(item => {
          const query = query.toLowerCase();
          return (
            itemsRef = itemsRef.where('allergens', 'not-in', ['Peanuts'])
          );
        });
      
    }
  
    if (soyFree) {
      itemsRef = itemsRef.where('allergens', 'not-in', ['Soy']);
    }
  
    if (glutenFree) {
      itemsRef = itemsRef.where('allergens', 'not-in', ['Gluten']);
    }
  
    // itemsRef.get().then((querySnapshot) => {
    //   // Process the results of the query here
    // });
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
            <button type="button" 
            className="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close" 
            onClick={closeSelf}
            ></button>
          </div>
          <div className="modal-body">
            <p></p>

            <form onSubmit={handleSubmit}>



              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Gluten-free</label>
                    <input id="glutenBox" 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={glutenFree} 
                    onChange={(e) => setGlutenFree(e.target.checked)}
                    // onChange={() => filterGluten()}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Soy-free</label>
                    <input id="soyBox" className="form-check-input" type="checkbox" checked={soyFree} onChange={(e) => setSoyFree(e.target.checked)}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inStock">Peanut-free</label>
                    <input id="peanutBox" className="form-check-input" type="checkbox" checked={peanutFree} onChange={(e) => setPeanutFree(e.target.checked)}/>
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