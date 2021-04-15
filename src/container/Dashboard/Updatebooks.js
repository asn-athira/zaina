import React from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from "react-router-dom";


class Updatebooks extends React.Component {
      //let search = window.location.search;
    // let params = new URLSearchParams(search);
      //let b_id = params.get('id');
    constructor(props) {
      
    super(props);
    this.state = { 
      id:  '',
      name: '',
      code: '',
      author: '',
      description: ''
     };


  }


  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let vid = params.get('id');
       //let vid = 4
    fetch(`https://zaina-api.herokuapp.com/books/${vid}`)
      .then(res => res.json())
      .then(json => {
         
          this.setState({
            id: json.id,
            name: json.name,
            code: json.code,
            author: json.author,
            description: json.description
          });
        
      }
      );
        // error handler
        
  }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
       let id = this.state.id
       fetch(`https://zaina-api.herokuapp.com/books/${id}`, {
        method: "PUT",
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
         
   

 //  var { id, name, code, author, description } = this.state;
   

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
               
                <button>Update Books</button>
                
              </form>    
           
	  </div>
	</div>
		
	 
	);

   }
};

export default Updatebooks


