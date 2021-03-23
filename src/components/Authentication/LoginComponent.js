
import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/userActions'
import {Link} from 'react-router-dom'
//import { push } from "react-router-redux";
//import { useHistory } from "react-router-dom";


//import { hashHistory } from 'react-router'


class LoginComponent extends React.Component {

    constructor(props) {

    super(props);
    this.state = {       
      email: '',
      password: ''
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
        this.props.fetchUser(this.state)


    }
   redirect = () => {
   
    
  }

    render(){
           

        return(
            <div>
                <form onSubmit={this.onSubmit} className="signup">
                <h1>Sign In</h1>
                 <h2>Don't have an account? <span><Link  to={"/signup"}>Sign up</Link></span></h2>
                 <div className="signup__field">
                    <input className="signup__input" 
                     type="text" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleOnChange} required />
                    <label className="signup__label" for="email">Email</label>
                  </div>
                  <div className="signup__field">
                    <input className="signup__input" 
                     type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange} required />
                    <label className="signup__label" for="password">Password</label>
                  </div>
                 
                    <button>Sign In</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)