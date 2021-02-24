import React from 'react';
import './Map.css';

const Map = (props) => {

return (
		<div >

			<div className="responsive-map-container">
  			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.5400589261637!2d55.144919435350324!3d25.074850014643946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca921eaf52b%3A0xda2d58522fa75593!2sZaiyna%20Laundry%20%26%20Dry%20Cleaning!5e0!3m2!1sen!2sin!4v1603721701197!5m2!1sen!2sin" title="map" />
			</div>
			<div className="card">
		  	<h3 className="card-h2">Service locations</h3>
		  	<p className="card-p">
		  	  Zaiyna Laundry & Dry Cleaning provides Dry Cleaning & Laundry in JLT (Jumeirah Lakes Tower) and following neighbourhood:
		  	</p>
		  	<p className="card-p2">
		  	  No matter in which area you live in, when you need laundry and dry-cleaning services, nothing would fit the choice as better than Zaiyna Laundry & Dry Cleaning. We can pick up the garments at the time requested and get it cleaned and delivered right back to your doorsteps within the deadline.
		  	  </p>
		  	<p className="card-p3">
		  		So why to put efforts in garment cleaning when Zaiyna the Best Laundry in Dubai can get it done for you! Just give us a call at 800-WASH or fill the booking form and our experts will get in touch with you right away.
		  	</p>
		  	<button className="card-button">servise location &nbsp;&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i>
        </button>
		  </div>

		</div>
	)
}
export default Map;