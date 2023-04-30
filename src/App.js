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

      {/*Title text*/}
      <div className='container'>
        <div className="text-center">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Manage Inventory</h1>
            </div>
          </div>
        </div>




        <div className="row">

          {/*Left button pannel */}
          <div className="col-3">
            <div className="row">
              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18 }} onClick={handleShowAddModal}>
                  Add Item
                </button>
              </div>

              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18 }} onClick={handleShowEditModal}>
                  Edit Item
                </button>
              </div>
            </div>



          </div>

          {/*Food item grid*/}
          <div className="col">
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
