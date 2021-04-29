import React, {useState} from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Addbooks = (props) => {

    //const [name, code, author, description, setState] = useState([]);
    //const baseURL = "http://localhost:3001"
    const baseURL = "https://zaina-api.herokuapp.com"

    const initBook = {name: '', code: '', author: '', description: ''};
    const [book, setBook] = useState(initBook);


    const userReducer = useSelector(state => state.userReducer)
    
    const handleChange = e => {
        const {name, value} = e.target;
        setBook({...book, [name]: value});
    }

   const handleSubmit = e => {
        e.preventDefault();
    let token = userReducer.token
       fetch(`${baseURL}/books`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization' : `${token}`
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
      }
    })
    }



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
     
	      <form className="signup">
          <h1>Create Books</h1>
              <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="name"
                  value={book.name}
                  onChange={handleChange}
                  required />
                  <label className="signup__label" for="name">Book Name</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="code"                             
                  value={book.code} 
                  onChange={handleChange}                 
                  required />
                  <label className="signup__label">Code</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  required />
                  <label className="signup__label">Author</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="text"
                  name="description"
                  value={book.description}
                  onChange={handleChange}
                  required />
                  <label className="signup__label">Description</label>
                </div>
               
                <button  type="submit" onClick={handleSubmit} >Add Books</button>
                
              </form>    
           
	  </div>
	</div>
		
	 
	);

   
};

export default Addbooks


