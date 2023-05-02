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
import { Search } from'react-bootstrap-icons'
import FoodCard from './FoodCard.js';


export function FoodItemCards(props) {
    const defaultState = 'loading'
    const [data, setData] = useState(defaultState);
    const [doFilter, setDoFilter] = useState(false)

    useEffect(() => {
        onSnapshot(
            collection(db, "foodItems"),
            (snapshot) => {
                console.log(snapshot)
                const items = snapshot.docs.map((doc) => doc.data());
                console.log(items)
                setData(items);

            },
            (error) => {
                console.error(error);
            }
        );

    }, []);


    useEffect(() => {
        if (props.searchFilter.length >= 3) {
            setDoFilter(true)
        } else {
            setDoFilter(false)
        }
    }, [props.searchFilter]);

    if (data == defaultState) {
        return (
            <div className="row mb-5">
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
            </div>
        );
    } else {
        if (doFilter) {
            const filteredItems = data.filter((item) => item.name.toLowerCase().includes(props.searchFilter.toLowerCase()))
            return LocalItemList(filteredItems);
        } else {
            return LocalItemList(data);
        }
    }
}

function LocalItemList(inputs) {
    if (inputs.length === 0) {
        return (
            <div className="py-5 text-secondary">
                <Search className='display-3 mb-3' />
                <h1>No items found.</h1>
                <h5>Please check your search for typos.</h5>
            </div>
        );
    }
    return (
        <div className="row mb-5">
            {inputs.map((item, index) => (
                <FoodCard index={index} item={item} />
            ))
            }
        </div >
    );
}