import React from 'react';
import {connect} from 'react-redux'

import './Dashboard.css';
import {Link} from 'react-router-dom'
import {deleteUser} from '../../actions/userActions'


class Profile extends React.Component {

   state = {
        users: [],
       error: null
     // isLoaded: false
    }

  componentDidMount() {
    fetch('https://zaina-api.herokuapp.com/users')
      .then(res => res.json())
      .then(json => {
      	//const fetchusers = [];
                //for (let key in res.data) {
                    //fetchusers.push({
                        //...res.data[key],
                        //id: key
                    //});
                //}
          this.setState({
            isLoaded: true,
            users: json
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

 
    

render(){
     var  users  = this.state;

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
		
	     <h1>Users</h1>        
	            <table>
	              <thead>
	                <th>Id</th>&nbsp;&nbsp;&nbsp;&nbsp;
	                <th>Name</th>&nbsp;&nbsp;&nbsp;&nbsp;
                  <th>Action</th>
		             </thead>
	             <tbody>
             {users.map(user => (
               <tr id={user.id}>
                 <td>{user.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                 <td>{user.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                 <td> </td>
               </tr>
               ))}
             </tbody>

	           </table>
           
	  </div>
	</div>
		
	 
	);

   }
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(null, mapDispatchToProps)(Profile)


