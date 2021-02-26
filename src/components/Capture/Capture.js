import React from 'react';
import './Capture.css';

const Capture = (props) => {

return (
		<div className="capture">
			<div className="pattern"></div>
			<div className="rectangle">
				<img src="/images/img2.png" className="rectangle2" alt="" />
				<p className="rect-title">30 % off for new customers</p>
				<p className="rect-p">Enjoy a welcome give of 30% off your first order. </p>
				<p className="p2">Call us </p> <p className="arrow">----></p> <p className="phone">+971 521 357 033</p>
				<button className="button"> schedule a pickup</button>
			</div>
		</div>

	)
}
export default Capture;