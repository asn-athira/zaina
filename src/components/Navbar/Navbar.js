import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

return (
			
			<div className="navbar">				
			  <ul>
			    <li><img src="/logo1.png" className="logo" alt=""/></li>
			    <li>About</li>
			    <li>Services</li>
			    <li>About</li>
			    <li>Services</li>
			    <li>Offers</li>
			    <li>Pricing</li>
			    <li>FAQ</li>
			    <li>Locations</li>	
			    <li><button className="navbar-button">&nbsp;<i className="fa fa-whatsapp"></i>
              whats up</button></li>	
          <li ><p className="phone"> Call us for 30% off on your first order!<br /><p className="phone-text">+971 521357033</p><br />We are Avaliable 24/7
          </p></li>    
			  </ul>
			</div>
	)
}
export default Navbar;