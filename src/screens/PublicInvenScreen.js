/* eslint-disable */
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from '../components/Navbar.js';
import { FoodItemCards } from '../components/GetFoodItems';
import { useState } from 'react';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import SearchFilter from '../components/SearchFilter';

function PublicInven() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [query, setQuery] = useState('');
  const isPublic = true; 

  const handleShowAddModal = () => {
    if (!showEditModal) {
      setShowAddModal(true);
    }
  }

  const handleShowEditModal = (item) => {
    if (!showAddModal) {
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
              <h1 className="pt-4 fw-semibold" style={{ fontWeight: "220", fontSize: "55px", paddingBottom: "10px", borderBottom: "solid black 0.5px" }}> BNC Food Pantry Inventory</h1>
            </div>
          </div>
        </div>




        <div className="row">

          <nav class="navbar">
            <SearchFilter callback={getSearchQuery} value={query} />
          </nav>

          <div className="text-center" >
            <FoodItemCards searchFilter={query} edit={edit} isPublic={isPublic} />
          </div>
        </div>

        <AddModal showModal={showAddModal} onClose={() => setShowAddModal(false)} />
        <EditModal showModal={showEditModal} editItem={editItem} onClose={() => setShowEditModal(false)} />
      </div>

    </div >
  );
}

export default PublicInven;