import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import AuthButton from './components/AuthButton.js';
import Navbar from './components/Navbar.js';
import { FoodItemCards } from './components/GetFoodItems';
import { useState } from 'react';

function MenuBNC() {


  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>

        <div className="row">
          <div className="col">
            <h1>Queue</h1>


            <div class="overflow-auto card shadow " style={{ maxWidth: "350px", maxHeight: "480px", backgroundColor: "#e2e2e230", borderWidth: "3px", borderColor: "#BFDFE5" }}>
              <div class="w-90 p-1" >

                <div class="card mb-3 shadow-sm mb-5  rounded border " id="queueCard-0" style={{ maxWidth: "350px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "100px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title" id="queueButtonTitle">Visitor: #53</h5>
                        <h6 class="card-title" id="queueButtonTitle"></h6>
                        <h6 class="card-title" id="queueButtonTitle">Contact</h6>

                        <a class="stretched-link" id="queueButton-0"></a>
                        <p class="card-text" id="queueButtonText-0"></p>
                        <p class="card-text" id="queueButtonTextRange-0"></p>
                      </div>
                    </div>
                  </div>
                </div>





              </div>


            </div>

          </div>

          <div className="col centered">
            <h1>Inventory</h1>

            <button className="btn btn-primary rounded-pill" >
              Test
            </button>

            <button className="btn btn-primary rounded-pill" >
              Edit Item
            </button>
          </div>

        </div>

      </div>

    </div >
  );
}

export default MenuBNC;
