import React, {useEffect} from 'react';

import './Zainaoffers.css';
import {fetchOffer} from '../actions/offerActions'
import {useSelector, useDispatch} from 'react-redux'

import Navbar from './../components/zaina_navbar/Navbar';


const Zainaoffers = (props) => {

	  const offerReducer = useSelector(state => state.offerReducer)
    
    const dispatch = useDispatch();
    //const [data, setData] = useState([]);
    //const data = offerReducer.offers

    useEffect(() => { 
     dispatch(fetchOffer());
    
     }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
  //  setData(offerReducer.offers);
    

return (
		<div>
      <Navbar />
      <div className="">
       
        <h1 className="offers-h1">Zaiyna’s Offers</h1><br /><br /><br /><br /><br /><br/><br/>
        <div class="row">
        {offerReducer.offers.map((offer) => (
          <div class="column">
            <div className="zaina-offers-sec">
              <h3 className="zaina-offers-p-text">{offer.offer_name}</h3>
              <p className="zaina-offers-p-text">{offer.location}</p>
              <p className="zaina-offers-p-text">call us --->{offer.phone}</p>
              <p className="zaina-offer-des">{offer.description}</p><br/>
              <button className="offer-button"> schedule a pickup</button><br/><br/><br/>
              <button className="offer-button2"> 800-WASH(9824)</button>

            </div> 
          </div>
          ))}
        </div>
      	
      </div>
      
    </div>
	);
};


export default Zainaoffers