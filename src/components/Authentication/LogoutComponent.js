import React from 'react'
import {connect} from 'react-redux'
//import {logUserOut} from '../../actions/userActions'
import PropTypes from "prop-types";

//import {Link} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import * as authActionCreators from '../../actions/userActions';

class LogoutComponent extends React.Component {

 static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.dispatch(authActionCreators.logUserOut());
  }

  render() {
    return (
     <Redirect to="/login" />
             //window.location = "/"
    );
  }
}
export default connect()(LogoutComponent);
