
import React from 'react'
import {connect} from 'react-redux'
import {resetPassword} from '../../actions/userActions'
import { withRouter} from 'react-router-dom'



class ResetpasswordComponent extends React.Component {

    constructor(props) {

    super(props);
    this.state = {       
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
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

        const { password, password_confirmation } = this.state;
        if (password !== password_confirmation) {
          alert("Passwords don't match");
          
        } else {
          this.props.resetPassword(this.state)
        }

    }
   
    render(){
           

        return(
            <div>
                <form onSubmit={this.onSubmit} className="signup">
                  <h1>Reset Password</h1><br />
                  <div className="signup__field">
                    <input className="signup__input" 
                        type="text" 
                        name="token" 
                        value={this.state.token}
                        onChange={this.handleOnChange} required />
                    <label className="signup__label" for="email">Token</label>
                  </div>

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
                    onChange={this.handleOnChange}
                     required />
                    <label className="signup__label" for="password">Password</label>
                  </div>

                  <div className="signup__field">
                    <input className="signup__input" 
                    type="password"
                    name="password_confirmation"
                    value={this.state.password_confirmation}
                    onChange={this.handleOnChange}
                     required />
                    <label className="signup__label" for="password">Password Confirmation</label>
                  </div>
               
                    <button>Update Password</button>

                </form>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (credentials) => dispatch(resetPassword(credentials))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ResetpasswordComponent))

