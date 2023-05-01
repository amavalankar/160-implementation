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

      {/*Title text*/}
      <div className='container'>
        <div className="text-center">
          <div className="row">
            <div className="col">
              <h1 className="text-center"> </h1>
            </div>
          </div>
        </div>




        <div className="row">

          {/*Left button pannel */}
          <div className="col-3">

            <div className="row">
              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18, backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowAddModal}>
                  Add Item
                </button>
              </div>

              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18, backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowEditModal}>
                  Edit Item
                </button>
              </div>
            </div>

            <div className="row my-5">
              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18, backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} >
                  Upload Items
                </button>
              </div>

              <div className="my-2">
                <button className="btn btn-primary rounded-box" style={{ width: 200, height: 50, fontSize: 18, backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} >
                  Inventory Properties
                </button>
              </div>
            </div>

          </div>





          {/*Food item grid*/}
          <div className="col">

            {/*Search and filter bar*/}
            <nav class="navbar">
              <div class="container-fluid">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                  <img src="https://cdn1.iconfinder.com/data/icons/round-web-icons/100/rwi-44-512.png" style={{ maxHeight: 40 }} alt="Filter"></img>

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
