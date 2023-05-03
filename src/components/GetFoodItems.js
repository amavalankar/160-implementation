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
            return LocalItemList(filteredItems, props);
        } else {
            return LocalItemList(data, props);
        }
    }
}

function LocalItemList(inputs, props) {
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
                <FoodCard key={index} item={item} edit={props.edit} isPublic={props.isPublic} />
            ))
            }
        </div>
    );
}