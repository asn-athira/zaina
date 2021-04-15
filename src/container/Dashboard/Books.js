import React from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'
//import {useSelector} from 'react-redux'


class Books extends React.Component {

   state = {
        books: [],
       error: null
     // isLoaded: false,
      //uname : this.props.user
     }

 


  componentDidMount() {
   
   // const username = useSelector(state => state.userReducer.user) 

    fetch(`https://zaina-api.herokuapp.com/books`)
      .then(res => res.json())
      .then(json => {
      	//const fetchusers = [];
                //for (let key in res.data) {
                    //fetchusers.push({
                        //...res.data[key],
                        //id: key
                    //});
    
          this.setState({
            isLoaded: true,
            books: json
          });
        
      }
      );
        // error handler
        
  }
deleteUser = (id) => {
  fetch(`https://zaina-api.herokuapp.com/books/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(id)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
             }
    })

    .then(data => {
      
    })
}

editUser = (id) => {
  fetch(`https://zaina-api.herokuapp.com/books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(id)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
             }
    })
     .then(json => {
        
          this.setState({
            isLoaded: true,
            books: json
          });
        
      }
      );
    }  

render(){
     var { books } = this.state;
    

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
     <Link  className="button-addbooks" to={"/add_books"} style={{float: 'right'}}>Add Books</Link>
		 <p></p>
	     <h1>Books</h1>        
	            <table>
	              <thead>
	                <th>Id</th>&nbsp;&nbsp;&nbsp;&nbsp;
	                <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>User id</th>&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>Action</th>
		             </thead>
	             <tbody>
             {books.map(book => (
               <tr id={book.id}>
                 <td>{book.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                 <td>{book.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                 <td>{book.uid}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                 <td> <button className="button-dashboard" onClick={() => { this.deleteUser(book.id) }} >
                 <i className="fa fa-trash fa-2x" ></i>
                 </button></td>
                 <td>                  
                  <button className="button-dashboard"><Link to={`/update_books?id=${book.id}`}><i className="fa fa-edit fa-2x" /></Link></button>
                 </td>
               </tr>
               ))}
             </tbody>

	           </table>
           
	  </div>
	</div>
		
	 
	);

   }
};

export default Books


