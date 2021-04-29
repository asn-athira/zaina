import React, {useEffect,useState} from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Viewbooks = (props) => {

  const [data, setData] = useState([]);

  const userReducer = useSelector(state => state.userReducer)
  
    //const baseURL = "http://localhost:3001"
    const baseURL = "https://zaina-api.herokuapp.com"

  useEffect(() => {
        let token = userReducer.token
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let vid = params.get('id');
           //let vid = 4
        fetch(`${baseURL}/books/${vid}`,{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization' : `${token}`
          }
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
       }, []);

  
     
  // Delete books


return (
	<div>
		<nav className="navbar" >
	   &nbsp;&nbsp;<img src="/images/logo1.png" className="logo1" alt=""/>

		  
	    <img src="/images/user.png" className="logout" alt=""/>

		</nav>
	  <nav className="main-menu">
		  <ul>
		    <li> 
		      <i className="fa fa-home fa-2x"></i>
	        <Link  className="nav-text" to={"/dashboard"}>Home</Link>

		    </li>
		      <li classNameName="has-subnav">
			      <i className="fa fa-user fa-2x"></i>
		        <Link  className="nav-text" to={"/profile"}>Profile</Link>
		      </li>
          <li classNameName="has-subnav">
            <i className="fa fa-book fa-2x"></i>
            <Link  className="nav-text" to={"/books"}>Books</Link>
          </li>
			  <ul classNameName="logout">
			    <li>
			      <i className="fa fa-power-off fa-2x"></i>
	         	<Link  className="nav-text" to={"/"}>Logout</Link>

			    </li>  
			  </ul>
		  </ul>
		</nav>
		<div className="box-dashboard">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1>Books</h1> <br />
  		 <p></p>      
        <br /><br />
        <table className="table">
          <thead className="thead">
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Author</th>
            <th>Description</th>
            <th>User id</th>
           </thead>
         <tbody className="tr">
         
           <tr id={data.id} >
             <td>{data.id}</td>
             <td>{data.name}</td>
             <td>{data.code}</td>
             <td>{data.author}</td>
             <td>{data.description}</td>
             <td>{data.user_id}</td>
             
           </tr>
       </tbody>

       </table>
           
	  </div>
	</div>
		
	 
	);

   
};

export default Viewbooks


