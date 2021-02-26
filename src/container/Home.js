import React from 'react';
import './Home.css';
//import banner from './../../public/banner.png'
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Map from './../components/Map/Map';
import Ticker from './../components/Ticker/Ticker';
import Capture from './../components/Capture/Capture';
import Advantages from './../components/Advantages/Advantages';
import Offers from './../components/zaina_offers/Offers';
import Works from './../components/zaina_works/Works';
import Schedule from './../components/zaina_pickup_schedule/Schedule';
import Pricing from './../components/zaina_pricing/Pricing';

const Home = (props) => {

return (
		<div>
      <Navbar />
      <div className="content">
      	<div className="section">     	  
	      	<div className="column">
	      		<p className="text" >Instant pick up and free delivery </p>
	      		<p className="head">Laundry & Dry Cleaning Service </p>
	      		<p className="text-2" ><i className="fa fa-tint"></i>&nbsp;&nbsp;We collect, clean and deliver directly to your door  </p>
	      		<button className="button-main"> Call us now on 800-WASH</button>
	      	</div>
	      	<div className="column">
	      		<img src="/images/banner.png" className="img" alt=""/>
	      	</div>
      	</div>
      	<Ticker />
      	<Capture />
      	<Advantages />
      	<Offers />
        <Works />
        <Schedule />
        <Pricing />
      </div>
      <Map />
      <Footer />
    </div>
	);
};
export default Home;