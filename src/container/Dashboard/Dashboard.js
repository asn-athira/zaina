import React, {useEffect,useState} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Dashboard = (props) => {
        
      // let {users} = userReducer.user
        //let {users} = {
    //"users": [
        //{
          //"name": "a",
          //"email": "Freed"
    //},
    //{
          //"name": "b",
          //"email": "Fifty"
    //}
    //]
  //}
  //const baseURL = "http://localhost:3001"
  const baseURL = "https://zaina-api.herokuapp.com"
  const [data, setData] = useState([]);
     

  const userReducer = useSelector(state => state.userReducer)
  
 

  useEffect(() => {
        let token = userReducer.token
         fetch(`${baseURL}/profile`, {
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

  
     
         if (userReducer.loggedIn === true) {


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
		<img src="/images/ch2.png" alt=""/>
		{userReducer.loggedIn ? <h1>welcome {data.name} </h1> : <h1>Not logged</h1>}
		</div>


	</div>
		
	 
	);
  }
 
};
export default Dashboard;



