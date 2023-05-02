import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { FoodItemCards } from '../components/GetFoodItems';
import { useState } from 'react';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import SearchFilter from '../components/SearchFilter';

function ManageInvenScreen() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [query, setQuery] = useState('');

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

            <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowEditModal}>
              Scan Items
            </button>

            <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowEditModal}>
              Inventory Properties
            </button>
          </div>

          <nav class="navbar">
            <SearchFilter callback={getSearchQuery} value={query} />
          </nav>

          <div className="text-center" >
            <FoodItemCards searchFilter={query} edit={edit} />
          </div>
        </div>

        <AddModal showModal={showAddModal} onClose={() => setShowAddModal(false)} />
        <EditModal showModal={showEditModal} editItem={editItem} onClose={() => setShowEditModal(false)} />
      </div>

    </div >
  );
}

export default ManageInvenScreen;
