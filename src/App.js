//import React, { useEffect} from 'react';
import React from 'react';

import Home from './container/Home'
import Dashboard from './container/Dashboard/Dashboard'

import {BrowserRouter, Switch, Route , Redirect} from 'react-router-dom'

import {useSelector} from 'react-redux'
import LoginComponent from './components/Authentication/LoginComponent'
import LogoutComponent from './components/Authentication/LogoutComponent'

import SignUpComponent from './components/Authentication/SignUpComponent'

import ForgotpasswordComponent from './components/Authentication/ForgotpasswordComponent'
import ResetpasswordComponent from './components/Authentication/ResetpasswordComponent'

import Profile from './container/Dashboard/Profile'
import Books from './container/Dashboard/Books'
import Addbooks from './container/Dashboard/Addbooks'
import Updatebooks from './container/Dashboard/Updatebooks'

//import PrivateRoute from './PrivateRoute'
//import {autoLogin} from './actions/userActions'
//import {logUserOut} from './actions/userActions'
//import history from './history/history'



const App = (props) => {
  const userReducer = useSelector(state => state.userReducer)
  //let username = userReducer.user
  //const dispatch = useDispatch();
//  
  //useEffect(() => {
    //dispatch(autoLogin())
  //}, [])
//


    return (
      <div>
      
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home />
              )}
            />                        
            <Route 
              exact path='/login' 
              render={props => (
             <LoginComponent />
             )}
              />
            <Route 
              exact path='/signup' 
               render={props => (
              <SignUpComponent />
              )}
              />
              <Route 
              exact path='/logout' 
               render={props => (
              <LogoutComponent />
              )}
              />
              <Route 
              exact path='/dashboard' 
               render={props => (
              <Dashboard />
              )}
              />
              <Route 
              exact path='/profile' 
               render={props => (
              <Profile />
              )}
              />
              <Route 
              exact path='/books'
               render={props => (
              <Books />
              )}
              />
              <Route 
              exact path='/add_books' 
               render={props => (
              <Addbooks />
              )}
              />
              <Route 
              exact path='/update_books' 
               render={props => (
              <Updatebooks/>
              )}
              />
              <Route 
              exact path='/forgot_password' 
               render={props => (
              <ForgotpasswordComponent />
              )}
              />              
              <Route 
              path='/reset_password' 
              render={props => (
              <ResetpasswordComponent />
                )}
              />
             
            </Switch>
        {
          !userReducer.loggedIn ? null : <Redirect to="/dashboard" />
        }
        </BrowserRouter>
        </div>
    );
  
}
export default App


//
//import React, {useEffect} from 'react'
//import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
//import LoginComponent from './components/Authentication/LoginComponent'
//import SignUpComponent from './components/Authentication/SignUpComponent'
//import {autoLogin} from './actions/userActions'
//import {logUserOut} from './actions/userActions'
//
//
//const App = () => {
  //const userReducer = useSelector(state => state.userReducer)
  //const dispatch = useDispatch()
//  
  //useEffect(() => {
    //dispatch(autoLogin())
  //}, [])
//  
  //return (
    //<div className="App">
        //{
          //!userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1 onClick={logUserOut}>Welcome, {userReducer.user.username} </h1>
        //}
        //<SignUpComponent/>
//
    //</div>
  //)
//}
//
//export default App
//
//
//
///*import React, { Component } from 'react';
//import Home from './container/Home'
//
//class App extends Component {
// 
 //render() {
    //return (
       //<Home />
    //);
  //}
//}
//export default App;*/