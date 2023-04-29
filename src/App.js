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
      <Navbar></Navbar>
      <div className='container'>
        <h1>Text</h1>

        <button className="btn btn-primary rounded-pill" onClick={handleShowAddModal}>
          Add Item
        </button>

        <button className="btn btn-primary rounded-pill" onClick={handleShowEditModal}>
          Edit Item
        </button>

        <div className="text-center">
          <FoodItemCards />
        </div>

        <AddModal showModal={showAddModal} onClose={() => setShowAddModal(false)} />
        <EditModal showModal={showEditModal} onClose={() => setShowEditModal(false)} />
      </div>
      
    </div>
  );
}

export default App;
