{/*
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import AuthButton from './components/AuthButton.js';
import Navbar from './components/Navbar.js';
import { FoodItemCards } from './components/GetFoodItems';
import { useState } from 'react';
import EditModal from './components/EditModal';
import AddModal from './components/AddModal';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowAddModal = () => {
    if (!showEditModal) {
      setShowAddModal(true);
    }
  }

  const handleShowEditModal = () => {
    if (!showAddModal) {
      setShowEditModal(true);
    }
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

     
      <div className='container'>

        <div className="">
          <div className="row">
            <div className="col">
              <h1 className="" style={{ fontWeight: "220", fontSize: "55px", paddingBottom: "10px", borderBottom: "solid black 0.5px" }}> Food Pantry</h1>
            </div>
          </div>
        </div>




        <div className="row">

         






         
          <div className="col">

           
            <nav class="navbar">
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                  <img src="https://cdn1.iconfinder.com/data/icons/round-web-icons/100/rwi-44-512.png" style={{ maxHeight: 40, paddingLeft: "10px" }} alt="Filter"></img>
                  <img src="https://static.thenounproject.com/png/987-200.png" style={{ maxHeight: 40, paddingLeft: "10px" }} alt="Filter"></img>

                </form>
              </div>
            </nav>


            <div className="text-center" >
              <FoodItemCards />
            </div>
          </div>
        </div>

        <AddModal showModal={showAddModal} onClose={() => setShowAddModal(false)} />
        <EditModal showModal={showEditModal} onClose={() => setShowEditModal(false)} />
      </div>

    </div >
  );
}

export default App;
*/}