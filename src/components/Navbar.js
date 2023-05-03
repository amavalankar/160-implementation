import React from 'react';
import AuthButton from './AuthButton';
import MenuBNC from '../components/MenuBNC';
import App from '../App';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fw-semibold fixed-top" style={{ backgroundColor: "#42a0bd" }}>

        <div className='container'>
          <span className="navbar-brand"></span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/MenuBNC">Dashboard</a>
              <a className="nav-item nav-link active" href="/App">Inventory</a>
              <a className="nav-item nav-link" href="#">Manage Listing</a>
              <a className="nav-item nav-link" href="#">Data Analytics</a>

            </div>

          </div>
        </div>

      </nav>
    </div>


  );
}

export default Navbar;
