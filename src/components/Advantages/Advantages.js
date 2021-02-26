import React from 'react';
import './Advantages.css';

const Advantages = (props) => {

return (

	  <div className="advantage-section">
	  	<img src="/images/circle.png" className="circle" alt=""/>
	  	<h2 className="adv-h">Why use Zaiyna for your dry cleaning & laundry</h2>
	  	<p className="adv-p">We’ll take great care of your clothing, guaranteed.</p>
	  	<div className="row-adv">
		  	<div className="frame1">
		   		<h4 className="frame-h1">Convenience</h4>
		   		<p className="frame-p1">
		   		We pick up and deliver your Laundry & Dry Cleaning 7 days a week for free to your doorstep
		   		</p>
		  	</div>
		  	<div className="frame2">
		   		<h4 className="frame-h2">Value</h4>
  	   		<p className="frame-p2">
  	   		The service is centered around your convenience and the highest quality care for your all your laundry items
  	   		</p>
		  	</div>
		  	<div className="frame3">
		   		<h4 className="frame-h3">Quality</h4>
		   		<p className="frame-p3">
		   		We provide standardized garment care is to be given in order to keep the clothes in use for a long.
		   		</p>
		  	</div>
	  	</div>
	  </div>

	)
}
export default Advantages;