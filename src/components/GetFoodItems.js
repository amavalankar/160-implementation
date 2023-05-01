// import { collection, query, where, getDocs } from "firebase/firestore";

// export default async function getItems() {
//     const q = query(collection(db, "foodItems"));

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
// }

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase.js';
import { collection, onSnapshot } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceholderCard from './PlaceholderCard.js';


export function FoodItemCards() {
    const defaultState = 'loading'
    const [data, setData] = useState(defaultState);

    useEffect(() => {
        onSnapshot(
            collection(db, "foodItems"),
            (snapshot) => {
                console.log(snapshot)
                const items = snapshot.docs.map((doc) => doc.data());
                console.log(items)

                setData(items)
            },
            (error) => {
                console.error(error);
            }
        );

    }, []);

    if (data == defaultState) {
        return (
            <div className="row">

                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />

                <div className="col-6 col-md-3 gx-4">
                    <div className="p-3 rounded rounded-4 border border-2" id="compare-one">
                        <h2 className="text-primary placeholder-glow fw-bold mb-1">
                            <span className="placeholder col-12 bg-primary"></span>
                        </h2>
                        <h4>
                            <span className="placeholder col-8"></span>
                        </h4>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-6 col-md-3 gx-4 gy-4">
                        <div className="shadow p-3 rounded rounded-4 border border-2" style={{ backgroundColor: item.inStock ? 'white' : '#ffabaf', width: 180, height: 230 }} id="compare-one">
                            {/*Add food item image here*/}

                            {item.image_url && <img style={{ width: 125 }} src={item.image_url} alt={item.name} />}
                            <h3 className="text-primary fw-bold mb-1" style={{ fontSize: 18 }}>
                                {item.name}
                            </h3>

                            <h6>
                                Qty: {item.quantity}
                            </h6>
                            {!item.inStock && <h6>Out of stock</h6>}

                        </div>
                    </div>
                ))
                }
            </div >
        );
    }
}