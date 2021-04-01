//const baseURL = "http://localhost:3001"
const baseURL = "https://zaina-api.herokuapp.com"

const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})
// Methods

export const fetchUser = (userInfo) => dispatch => {
  
    //fetch(`https://zaina-api.herokuapp.com/auth/login`, {
        fetch(`${baseURL}/auth/login`, {
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
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
        dispatch(setUser(response.user))
        //dispatch(getCurrentUser())
      }
    })
    .then(data => {
        // data sent back will in the format of
        //{
             //user: {}
        ////.    token: "aaaaa.bbbbb.bbbbb"
        //}
       // localStorage.setItem("token", data.token)
        //localStorage.setItem('user', data.user)
        //user: res.data,
       // dispatch(setUser(data.user))
    })
    
}

export const signUserUp = (userInfo) => dispatch => {
    //fetch(`https://zaina-api.herokuapp.com/users`, {
        fetch(`${baseURL}/users`, {
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


export const forgotPassword = (email) => dispatch => {
  return fetch(`${baseURL}/forgot_password`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(email)
  })
  .then(res => res.json())
  .then(response => {
    alert(response.alert)
  })
  .catch(console.log)
}

export const resetPassword = (credentials) => dispatch => {
    return fetch(`${baseURL}/reset_password`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
        //dispatch(getCurrentUser())
      }
    })
    .catch(console.log)
  
}

export const autoLogin = () => dispatch => {
    //fetch(`https://zaina-api.herokuapp.com/auto_login`, {
        fetch(`http://localhost:3001/auto_login`, {
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