import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { addDoc, collection, setDoc, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import AllergenBadge from './AllergenBadge';
import ImgUploading from '../ImgUploading';
import { exportUrl } from '../ImgUploading';

export default function ScanModal(props) {
    // item's reference in Cloud Firestore DB.
    const [itemRef, setItemRef] = useState('');
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
    const closeSelf = () => {
        props.onClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        pushData(formJson, data);
        console.log(formJson)

        props.onClose();

        e.target.reset();
    }

    return (
        <div className={`modal fade ${props.showModal ? 'show d-block' : ''}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Scan Items</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeSelf}></button>
                    </div>
                    <div className="modal-body">
                        <p></p>

                        <form onSubmit={handleSubmit}>

                            {/* Temporary way of inputting images through URL */}
                            <div className="form-floating mb-3">

                                <ImgUploading>
                                </ImgUploading>
                            </div>

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
    if (exportUrl.toString().includes("1Soup") || exportUrl.toString().includes("2Soup") || exportUrl.toString().includes("3Soup")) {
        var toAdd = 0;
        if (exportUrl.toString().includes("1Soup")) {
            toAdd = 1;
        } else if (exportUrl.toString().includes("2Soup")) {
            toAdd = 2;
        } else if (exportUrl.toString().includes("3Soup")) {
            toAdd = 3;
        }
        var found = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== undefined) {
                if (data[i].name == "Campbell's Soup") {
                    found = true;
                    const docRef = updateDoc(doc(db, "foodItems", data[i].id), {
                        allergens: (data[i].allergens || []),
                        inStock: data[i].inStock ? true : false,
                        limitPerDay: (data[i].dailyLimit || 1),
                        limitPerPerson: (data[i].personalLimit || ''),
                        name: data[i].name,
                        quantity: parseInt(data[i].quantity) + toAdd,
                        image_url: (data[i].image_url || "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Soup.png?alt=media&token=4b8b1d2b-67e8-4a61-b867-fe84af29db53")
                    });
                    break;
                }
            }
        }
        if (!found) {
            const docRef = addDoc(collection(db, "foodItems"), {
                allergens: [],
                inStock: true,
                limitPerDay: 1,
                limitPerPerson: '',
                name: "Campbell's Soup",
                quantity: toAdd,
                image_url: "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Soup.png?alt=media&token=4b8b1d2b-67e8-4a61-b867-fe84af29db53"
            });
        }
    }

    if (exportUrl.toString().includes("1Pasta")) {
        var found = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== undefined) {
                if (data[i].name == "De Cecco Pasta") {
                    found = true;
                    const docRef = updateDoc(doc(db, "foodItems", data[i].id), {
                        allergens: (data[i].allergens || ["Gluten"]),
                        inStock: data[i].inStock ? true : false,
                        limitPerDay: (data[i].dailyLimit || 1),
                        limitPerPerson: (data[i].personalLimit || ''),
                        name: data[i].name,
                        quantity: parseInt(data[i].quantity) + 1,
                        image_url: (data[i].image_url || "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Pasta.png?alt=media&token=f7944b87-26de-40e1-bb44-e175c3c7fe3c")
                    });
                    break;
                }
            }
        }
        if (!found) {
            const docRef = addDoc(collection(db, "foodItems"), {
                allergens: ["Gluten"],
                inStock: true,
                limitPerDay: 1,
                limitPerPerson: '',
                name: "De Cecco Pasta",
                quantity: 1,
                image_url: "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Pasta.png?alt=media&token=f7944b87-26de-40e1-bb44-e175c3c7fe3c"
            });
        }
    }

    if (exportUrl.toString().includes("1Ramen") || exportUrl.toString().includes("2Ramen") || exportUrl.toString().includes("3Ramen")) {
        var toAdd = 0;
        if (exportUrl.toString().includes("1Ramen")) {
            toAdd = 1;
        } else if (exportUrl.toString().includes("2Ramen")) {
            toAdd = 2;
        } else if (exportUrl.toString().includes("3Ramen")) {
            toAdd = 3;
        }
        var found = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== undefined) {
                if (data[i].name == "Maruchan Ramen") {
                    found = true;
                    const docRef = updateDoc(doc(db, "foodItems", data[i].id), {
                        allergens: (data[i].allergens || []),
                        inStock: data[i].inStock ? true : false,
                        limitPerDay: (data[i].dailyLimit || 1),
                        limitPerPerson: (data[i].personalLimit || ''),
                        name: data[i].name,
                        quantity: parseInt(data[i].quantity) + toAdd,
                        image_url: (data[i].image_url || "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Ramen.png?alt=media&token=d2f54ab8-6a37-4ebd-9e9a-f1a0102e15ac")
                    });
                    break;
                }
            }
        }
        if (!found) {
            const docRef = addDoc(collection(db, "foodItems"), {
                allergens: [],
                inStock: true,
                limitPerDay: 1,
                limitPerPerson: '',
                name: "Maruchan Ramen",
                quantity: toAdd,
                image_url: "https://firebasestorage.googleapis.com/v0/b/implementation-b72cf.appspot.com/o/1Ramen.png?alt=media&token=d2f54ab8-6a37-4ebd-9e9a-f1a0102e15ac"
            });
        }
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

}