/* eslint-disable */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar.js';
import { FoodItemCards } from './components/GetFoodItems';
import { useState } from 'react';
import EditModal from './components/EditModal';
import ScanModal from './components/ScanModal';
import AddModal from './components/AddModal';
import SearchFilter from './components/SearchFilter';

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [query, setQuery] = useState('');

  const handleShowAddModal = () => {
    if (!showEditModal && !showScanModal) {
      setShowAddModal(true);
    }
  }

  const handleShowScanItems = () => {
    if (!showAddModal && !showEditModal) {
      setShowScanModal(true);
    }
  }

  const handleShowEditModal = (item) => {
    if (!showAddModal && !showScanModal) {
      setEditItem(item)
      setShowEditModal(true);
    }
  }

  const getSearchQuery = (input) => {
    setQuery(input)
  }

  const edit = (input) => {
    console.log(input)
    handleShowEditModal(input)
  }

  const isPublic = false; 

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      {/*Title text*/}
      <div className='container mt-5'>

        <div className="">
          <div className="row">
            <div className="col">
              <h1 className="pt-4 fw-semibold" style={{ fontWeight: "220", fontSize: "55px", paddingBottom: "10px", borderBottom: "solid black 0.5px" }}> Inventory Management</h1>
            </div>
          </div>
        </div>




        <div className="row">
          <div className="my-2">
            <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowAddModal}>
              Add Item
            </button>

            <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowScanItems}>
              Scan Items
            </button>

            {/*
            <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} >
              Inventory Properties
            </button>
            */}

          </div>


          <nav className="navbar">
            <SearchFilter callback={getSearchQuery} value={query} />
          </nav>



          <div className="text-center" >
            <FoodItemCards searchFilter={query} edit={edit} isPublic={isPublic} />
          </div>
        </div>

        <AddModal showModal={showAddModal} onClose={() => setShowAddModal(false)} />
        <ScanModal showModal={showScanModal} onClose={() => setShowScanModal(false)} />
        <EditModal showModal={showEditModal} editItem={editItem} onClose={() => setShowEditModal(false)} />
      </div>

    </div >
  );
}

export default App;