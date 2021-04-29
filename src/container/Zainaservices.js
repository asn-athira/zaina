import React, {useEffect} from 'react';
//import {connect} from 'react-redux'

import './Zainaservices.css';
import {fetchService} from '../actions/serviceActions'
import {useSelector, useDispatch} from 'react-redux'

import Navbar from './../components/zaina_navbar/Navbar';


const Zainaservices = (props) => {

	  const serviceReducer = useSelector(state => state.serviceReducer)
    
    const dispatch = useDispatch();
    
    useEffect(() => { 
      dispatch(fetchService())  
     
     }, []);
    
    

return (
		<div>
      <Navbar />
      
      <h1 className="zaina-services-h1">Services</h1><br/><br/><br/><br/>
      

      <div class="row">
      {serviceReducer.services.map((service) => (
        <div class="column">
          <div className="zaina-service-sec">
            <h2 className="zaina-services-h2">{service.service_name} </h2>
            <p className="zaina-service-text">
             {service.description}
            </p>
            <p className="zaina-service-lern">learn more</p>
          </div>          
        </div>
        ))}
      </div>     	  
    </div>
	);
};


export default Zainaservices