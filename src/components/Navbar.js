import React, {useState} from 'react';
import AuthButton from './AuthButton';
import MenuBNC from '../components/MenuBNC';
import App from '../App';


function Navbar() {
  // const [active, setActive] = useState(null)
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
              <img style={{width:50, height: 50, marginRight: 50}} src="https://basicneeds.berkeley.edu/sites/default/files/styles/openberkeley_image_full/public/general/bnc_color_logo-teal_bnc_3.png?itok=um0UUS_j&c=c04f838d7a8d5f79cc3052e263d0d8f5&timestamp=1661380655"></img>
              <a id="Dashboard" className="nav-item nav-link" href="/MenuBNC">Dashboard</a>
              <a id="Inventory" className="nav-item nav-link" href="/App" >Inventory</a>
              {/* <a className="nav-item nav-link" href="#">Manage Listing</a> */}
              {/* <a className="nav-item nav-link" href="#">Data Analytics</a> */}
              <a id="PubInven" className="nav-item nav-link" href="/PublicInven">Public Inventory</a>


            </div>

          </div>
        </div>

      </nav>
    </div>


  );
}

export default Navbar;
