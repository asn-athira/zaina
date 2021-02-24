import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

return (
			
			<div className="navbar">				
			  <ul>
			    <li><img src="/logo1.png" className="logo" alt=""/></li>
			    <li><a href="about.html">About</a></li>
			    <li><a href="about.html">Services</a></li>
			    <li><a href="about.html">About</a></li>
			    <li><a href="about.html">Services</a></li>
			    <li><a href="about.html">Offers</a></li>
			    <li><a href="about.html">Pricing</a></li>
			    <li><a href="about.html">FAQ</a></li>
			    <li><a href="about.html">Locations</a></li>	
			    <li><button className="navbar-button">&nbsp;<i className="fa fa-whatsapp"></i>
              whats up</button></li>	
          <li ><p className="phone1"> Call us for 30% off on your first order!</p><br /><p className="phone-text">+971 521357033</p><br /><p className="phone2">We are Avaliable 24/7
          </p></li>    
			  </ul>
			</div>
	)
}
export default Navbar;