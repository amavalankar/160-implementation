/* eslint-disable */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar.js';
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
    case "/PublicInven":
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