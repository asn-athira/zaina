import React from 'react';
import './Footer.css';

const Footer = (props) => {

return (
			<footer>
				<div className="footer">
				  <br />
				  <hr className="hr-1" />
				  <hr className="hr-2" />
				  <hr className="hr-3" />				  
					<div className="column">						
						<ul>
							<li className="p-text">contact info</li>
							<li className="title">Zaiyna Laundry & Dry Cleaning</li>
							<li>Shop No 3, Concourse Level</li>
							<li>Armada Tower 3, Cluster P</li>
							<li>JLT - Jumeirah Lakes Tower</li>
							<li>Dubai, United Arab Emirates</li>							
						</ul>						
					</div>         
					<div className="column">
						<ul>
							<li className="p-text">locations</li>
							<li className="title"> Laundry in Jumeirah Lake Towers (JLT)</li>
							<li> Pressing in Jebel Ali Village</li>
							<li> Dry Cleaning in Dubai Investment Park (DIP)</li>
							<li> Pressing in Discovery Gardens</li>
							<li> Laundry Service in The Gardens</li>
							<li> Jumeirah Village Circle (JVC)</li>
						</ul>
					</div>
					<div className="column">
						<ul><br />					
							<li> Laundry in Jumeirah Park</li>
							<li> Dry Cleaning in Jumeirah Island</li>
							<li> Alteration in Barsha Heights</li>
							<li> Laundry in Dubai Sport City </li>
							<li> Free Pick up and Delivery in Palm Jumeirah </li>
						</ul>
					</div> 
					<div className="column">
						<ul><br />	
							<li>Call us for 30% off on your first order!</li>
							<li className="title">+971 521 357 033</li>
							<li>We are Avaliable 24/7</li>
							<li>Sat to Friday: 9:30 AM - 10:30 PM</li>
							<li><button className="footer-button"> schedule a pickup</button></li>
						</ul>
					</div>
				</div>
				<div className="sub-footer">
					 Copyright © 2021
					</div>
				</footer>
					
				

	)
}
export default Footer;