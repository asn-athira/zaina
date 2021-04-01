
import React from 'react'
import './Style.css';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {signUserUp} from '../../actions/userActions'

class SignUpComponent extends React.Component {
   
    constructor(props) {

    super(props);
    this.state = { 
      name: '',
      username: '',
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
        this.props.signUserUp(this.state)
    }

    render(){
        return(
        <div>
          <form onSubmit={this.onSubmit} className="signup">
          <h1>Create account</h1>
          <h2>Already have an account? <span><Link  to={"/login"}>Sign In</Link></span></h2>
              <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="name"
                  value={this.state.name}
                  onChange={this.handleOnChange} required />
                  <label className="signup__label" for="username">Name</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" type="text" 
                  name="username"                             
                  value={this.state.username}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label" for="username">UserName</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label" for="email">Email</label>
                </div>
                <div className="signup__field">
                  <input className="signup__input" 
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleOnChange}
                   required />
                  <label className="signup__label" for="password">Password</label>
                </div>
               
                <button>Sign up</button>
                
              </form>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(SignUpComponent)