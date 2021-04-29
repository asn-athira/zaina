import React, {useEffect,useState} from 'react';
//import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Books = (props) => {

  //const baseURL = "http://localhost:3001"
  const baseURL = "https://zaina-api.herokuapp.com"
  const [data, setData] = useState([]);

  const userReducer = useSelector(state => state.userReducer)
  
 

  useEffect(() => {
         let token = userReducer.token
         fetch(`${baseURL}/get_user_books`, {
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
       }, []);// eslint-disable-line react-hooks/exhaustive-deps

  
     
  // Delete books
const deleteBook = (id) => {
  let token = userReducer.token
  fetch(`${baseURL}/books/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : `${token}`
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
        <Link  className="button-dashboard" to={"/add_books"} style={{float: 'right'}}>Add Books</Link>
        
        <br /><br />
        <table className="table">
          <thead className="thead">
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Author</th>
            <th>Description</th>
            <th>User id</th>
            <th>Action</th>
           </thead>
         <tbody className="tr">
         {data.map((book) => (
           <tr id={book.id} >
             <td>{book.id}</td>
             <td>{book.name}</td>
             <td>{book.code}</td>
             <td>{book.author}</td>
             <td>{book.description}</td>
             <td>{book.user_id}</td>
             <td> 
              <button className="button-dashboard" onClick={() => { deleteBook(book.id) }} >
              <i className="fa fa-trash fa-2x" ></i>
              </button>   &nbsp;&nbsp;&nbsp;&nbsp;               
              <button className="button-dashboard"><Link to={`/update_books?id=${book.id}`}><i className="fa fa-edit fa-2x" /></Link></button>
              &nbsp;&nbsp;&nbsp;&nbsp;               
              <button className="button-dashboard"><Link to={`/view_books?id=${book.id}`}><i className="fa fa-eye fa-2x" /></Link></button>
             </td>
           </tr>
           ))}
       </tbody>

       </table>
           
	  </div>
	</div>
		
	 
	);

   
};

export default Books


