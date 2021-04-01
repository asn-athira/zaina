
import React from 'react'
import {connect} from 'react-redux'
import {forgotPassword} from '../../actions/userActions'
//import { withRouter} from 'react-router-dom'



class ForgotpasswordComponent extends React.Component {

    constructor(props) {

    super(props);
    this.state = {       
      email: ''
      
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
       this.props.forgotPassword(this.state)

    //forgotPassword(this.state.email)
    //this.setState({
    //  email: ""
    //})
      // this.props.history.push('/')

    }
   
    render(){
           

        return(
            <div>
                <form onSubmit={this.onSubmit} className="signup">
                <h1>Forgot  Password?</h1><br />
                 <h4>Please enter your Email id here :</h4><br />
                 <div className="signup__field">
                    <input className="signup__input" 
                        type="text" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleOnChange} required />
                    <label className="signup__label" for="email">Email</label>
                  </div>
                  
                 
                    <button>Send Email</button>

                </form>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        forgotPassword: (email) => dispatch(forgotPassword(email))
    }
}

export default connect(null, mapDispatchToProps)(ForgotpasswordComponent)

