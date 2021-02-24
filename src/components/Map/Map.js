import React from 'react';
import './Map.css';

const Map = (props) => {

return (
		<div >

			<div className="responsive-map-container">
  			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.5400589261637!2d55.144919435350324!3d25.074850014643946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca921eaf52b%3A0xda2d58522fa75593!2sZaiyna%20Laundry%20%26%20Dry%20Cleaning!5e0!3m2!1sen!2sin!4v1603721701197!5m2!1sen!2sin" />
			</div>
			<div className="card">
		  	<h3 className="card-h2">Service locations</h3>
		  </div>

		</div>
	)
}
export default Map;