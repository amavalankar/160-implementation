import React from 'react';
import AuthButton from './AuthButton';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My App</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 3</a>
        </li>
      </ul>

      <AuthButton></AuthButton>
    </nav>
  );
}

export default Navbar;
