import React from 'react';
import './Pricing.css';

const Pricing = (props) => {

return (
		<div className="zaina-pricing">
		<img src="/images/pricing.png" className="priicng-img" alt=""/>
		<h1 className="pricing-h1">Your Zaiyna bags. Your choice. </h1>
		<p className="pricing-subtitle">We guarantee the Best Price in Dubai, (UAE).</p>
		<div className="card-pricing1">
			<h5 className="car-h1">Dry cleaning</h5>
			<p className="card-p1">Price per item from:</p>
			<p className="card-p1">Laundry   12 AED</p>
			<p className="card-p1">Dry Clean    12 AED</p>
			<p className="card-p1">Steam Press  12 AED</p>
      <p className="card-p1">learn price -> </p>
		</div>
		<div className="card-pricing2">

		</div>
		<div className="card-pricing3">

		</div>
		</div>
	)
}
export default Pricing;