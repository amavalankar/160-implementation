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
import SearchFilter from './components/SearchFilter';
import MenuBNC from './components/MenuBNC';
import App from './App'
import PublicInvenScreen from './screens/PublicInvenScreen';

function MenuNavigation() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/MenuBNC":
      component = <MenuBNC />
      break
    case "/App":
      component = <App />
      break
    case "./screens/PublicInven":
        component = < PublicInvenScreen />
  }

  return (
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default MenuNavigation;