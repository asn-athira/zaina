import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

return (
			
			<div className="navbar">
				
			  <ul>
			    <li><img src="/logo1.png" className="logo" alt=""/></li>
			    <li><a href="">About</a></li>
			    <li><a href="">Services</a></li>
			    <li><a href="">About</a></li>
			    <li><a href="">Services</a></li>
			    <li><a href="">Offers</a></li>
			    <li><a href="">Pricing</a></li>
			    <li><a href="">FAQ</a></li>
			    <li><a href="">Locations</a></li>	
			    <li><button className="navbar-button">&nbsp;<i className="fa fa-whatsapp"></i>
              whats up</button></li>	
          <li ><p className="phone"> Call us for 30% off on your first order!<br /><p className="phone-text">+971 521357033</p><br />We are Avaliable 24/7
          </p></li>    
			  </ul>
			</div>
	)
}
export default Navbar;