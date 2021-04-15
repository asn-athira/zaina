import React from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'


class Addbooks extends React.Component {

    constructor(props) {

    super(props);
    this.state = { 
      name: '',
      code: '',
      author: '',
      description: ''
     };
  }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()

       //fetch(`http://localhost:3001/books`, {
        fetch(`https://zaina-api.herokuapp.com/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(this.state)
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

render(){
     

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
     
	      <form onSubmit={this.onSubmit} className="signup">
          <h1>Create Books</h1>
              <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="name"
                  value={this.state.name}
                  onChange={this.handleOnChange} required />
                  <label className="signup__label" for="name">Book Name</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="code"                             
                  value={this.state.code}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label">Code</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label">Author</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label">Description</label>
                </div>
               
                <button>Create Books</button>
                
              </form>    
           
	  </div>
	</div>
		
	 
	);

   }
};

export default Addbooks


