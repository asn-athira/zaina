//import { push } from 'react-router-redux'
//import { useHistory } from "react-router-dom";

const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})
// Methods

export const fetchUser = (userInfo) => dispatch => {
  //let history = useHistory();

    fetch(`https://zaina-api.herokuapp.com/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
         
     
    })
    //.then(res => res.json())
    //.then(res => {
        ////dispatch(push('/'))
        //history.dispatch('/dashboard')
    //}
    //)
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        //{
             //user: {}
        ////.    token: "aaaaa.bbbbb.bbbbb"
        //}
        localStorage.setItem("token", data.token)
        localStorage.setItem('user', data.user)
        //user: res.data,
        dispatch(setUser(data.user))
    })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`https://zaina-api.herokuapp.com/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}

export const autoLogin = () => dispatch => {
    fetch(`https://zaina-api.herokuapp.com/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}