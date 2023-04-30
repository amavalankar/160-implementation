import React from 'react';
import AuthButton from './AuthButton';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BNC</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Database</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Manage Listing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Data Analytics</a>
        </li>
      </ul>

      <AuthButton></AuthButton>
    </nav>
  );
}

export default Navbar;
