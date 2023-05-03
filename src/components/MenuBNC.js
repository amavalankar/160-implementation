import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import AuthButton from './AuthButton.js';
import Navbar from './Navbar.js';
import { FoodItemCards } from './GetFoodItems';
import { useState } from 'react';
import App from '../App';

function MenuBNC() {


  return (
    <>
      <div>
        <div className='container'>


          <div className="row" style={{ paddingTop: "50px" }}>

            <div className="">
              <div className="row">
                <div className="col">
                  <h1 className="pt-4 fw-semibold" style={{ fontWeight: "220", fontSize: "55px", paddingBottom: "10px", borderBottom: "solid black 0.5px" }}> Dashboard</h1>
                </div>
              </div>
            </div>

            <div className="col">

              <div class="card shadow-sm border text-center" id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px", borderWidth: "10px", backgroundColor: "#f0f0f0" }}>
                <h2>Queue</h2>
              </div>
              <div class="overflow-auto card shadow " style={{ maxWidth: "350px", maxHeight: "430px", backgroundColor: "#e2e2e230", borderWidth: "3px", borderColor: "#BFDFE5" }}>
                <div class="w-90 p-1" >

                  <div class="card mb-3 shadow-sm mb-5 rounded border" id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px", borderWidth: "10px", backgroundColor: "#defbff" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start rounded-end align-text" alt="..."></img>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" id="queueButtonTitle">Visitor: #53</h5>
                          <h6 class="card-title" id="queueButtonTitle">Joined: 4:31 PM</h6>
                          <h6 class="btn btn-light border rounded-3" style={{ fontSize: "12px" }} id="queueButtonTitle">Contact</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3 shadow-sm mb-5  rounded border " id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" id="queueButtonTitle">Visitor: #54</h5>
                          <h6 class="card-title" id="queueButtonTitle">Joined: 4:32 PM</h6>
                          <h6 class="btn btn-light border rounded-3" style={{ fontSize: "12px" }} id="queueButtonTitle">Contact</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3 shadow-sm mb-5  rounded border " id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" id="queueButtonTitle">Visitor: #55</h5>
                          <h6 class="card-title" id="queueButtonTitle">Joined: 4:34 PM</h6>
                          <h6 class="btn btn-light border rounded-3" style={{ fontSize: "12px" }} id="queueButtonTitle">Contact</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3 shadow-sm mb-5  rounded border " id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" id="queueButtonTitle">Visitor: #56</h5>
                          <h6 class="card-title" id="queueButtonTitle">Joined: 4:38 PM</h6>
                          <h6 class="btn btn-light border rounded-3" style={{ fontSize: "12px" }} id="queueButtonTitle">Contact</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3 shadow-sm mb-5  rounded border " id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://chart.googleapis.com/chart?cht=qr&chl=Food%20Pantry%20Visitor%20ID%3A%20549&chs=180x180&choe=UTF-8&chld=L|2" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" id="queueButtonTitle">Visitor: #57</h5>
                          <h6 class="card-title" id="queueButtonTitle">Joined: 4:39 PM</h6>
                          <h6 class="btn btn-light border rounded-3" style={{ fontSize: "12px" }} id="queueButtonTitle">Contact</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>

              <div class="card mb-3 shadow-sm mb-5 border text-center" id="queueCard-0" style={{ maxWidth: "350px", maxHeight: "120px", borderWidth: "10px", backgroundColor: "#f0f0f0" }}>
                <h5>Est. wait time: 7 min</h5>

              </div>


            </div>

            <div className="col centered">
              <h1></h1>

              <div className="row" style={{ paddingTop: "100px", }}>
                <div className="col">
                  <div className="row" style={{ paddingTop: "40px", }}>

                    <div class="card mb-3 shadow-sm mb-5 rounded border border-4 " id="queueCard-0" style={{ maxWidth: "250px", maxHeight: "120px" }}>
                      <div class="row g-0 align-items-center">
                        <div class="col-md-4 align-items-center">
                          <img src="https://cdn-icons-png.flaticon.com/512/5759/5759267.png" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                        </div>
                        <div class="col-md-8 align-items-center">
                          <div class="card-body text-center align-items-center">
                            <a href="/App" style={{ textDecoration: "none" }}>
                              <h5 class="card-title" id="queueButtonTitle">Manage Inventory</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col" style={{ paddingLeft: "50px" }}>
                      <div class="card  shadow-sm  rounded border ml-3 border-4" id="queueCard-0" style={{ maxWidth: "250px", maxHeight: "120px" }}>
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                          </div>
                          <div class="col-md-8" style={{ lineHeight: "10px", height: "10px" }}>
                            <div class="card-body text-center align-items-center" >
                              <a href="https://www.berkeley.edu/" style={{ textDecoration: "none" }}>
                                <h5 class="card-title" id="queueButtonTitle">Upload Scan</h5>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="row" style={{ paddingTop: "30px", }}>


                    <div class="card mb-3 shadow-sm mb-5  rounded border border-4" id="queueCard-0" style={{ maxWidth: "250px", maxHeight: "120px", }}>
                      <div class="row g-0 align-items-center" >
                        <div class="col-md-4 align-items-center" >
                          <img src="https://cdn-icons-png.flaticon.com/512/993/993762.png" id="queueButtonImage" style={{ maxHeight: "200px", }} class="img-fluid rounded-start align-text" alt="..."></img>
                        </div>
                        <div class="col-md-8 align-items-center" >
                          <div class="card-body text-center align-items-center" >
                            <a href="https://www.berkeley.edu/" style={{ textDecoration: "none" }}>
                              <h5 class="card-title" id="queueButtonTitle">Data Analytics</h5>
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>



                    <div className="col" style={{ paddingLeft: "50px" }}>
                      <div class="card  shadow-sm  rounded border ml-3 border-4" id="queueCard-0" style={{ maxWidth: "250px", maxHeight: "120px" }}>
                        <div class="row g-0 align-items-center">
                          <div class="col-md-4 align-items-center">
                            <img src="https://cdn4.iconfinder.com/data/icons/finite-application/16/grid-9-512.png" id="queueButtonImage" style={{ maxHeight: "200px" }} class="img-fluid rounded-start align-text" alt="..."></img>
                          </div>
                          <div class="col-md-8 align-items-center">
                            <div class="card-body text-center">
                              <a href="https://www.berkeley.edu/" style={{ textDecoration: "none" }}>
                                <h5 class="card-title" id="queueButtonTitle">Manage Listing</h5>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div >



      </div >
    </>
  );
}

export default MenuBNC;
