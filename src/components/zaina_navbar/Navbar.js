import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom'


const Navbar = (props) => {

return (
    <div>
      <nav>
        <div className="logo">
            <img src="/images/logo1.png" alt=""/>
        </div>
        <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li><a href="about.html">About</a></li>
          <li><Link  to={"/services"}>Services</Link></li>
          <li><Link  to={"/offers"}>Offers</Link></li>
          <li><a href="about.html">Pricing</a></li>
          <li><a href="about.html">FAQ</a></li>
          <li><a href="about.html">Locations</a></li> 
         <li><Link  to={"/login"}>Sign in</Link></li> 
          <li > Call us for 30% off on your first order!<br />+971 521357033<br />We are Avaliable 24/7
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;