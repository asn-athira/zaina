// /const baseURL = "http://localhost:3001"
const baseURL = "https://zaina-api.herokuapp.com"
 
const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})
// Methods

export const fetchUser = (userInfo) => dispatch => {
  
    //fetch(`https://zaina-api.herokuapp.com/auth/login`, {
        fetch(`${baseURL}/authenticate`, {
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
    .then(res => {
      if (!!res.error) {
        alert(res.error)
        window.location = "/"
      } else {
        alert(res.alert)
        //user: res.user
        dispatch(setUser(res.auth_token))
       //  localStorage.setItem('user', res.data)

        //dispatch(getCurrentUser())
      }
    })
   .then(data => {
       //
        // data sent back will in the format of
        //{
             //user: {}
        ////.    token: "aaaaa.bbbbb.bbbbb"
        //}
       // localStorage.setItem("token", data.token)
       // localStorage.setItem('user', data.user)
       //user: res.data
       //dispatch(setUser(data.user))
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
    .then(response => {
      if (!!response.error) {
        alert(response.error)
        window.location = "/signup"
      } else {
        alert(response.alert)
        window.location = "/login"
        //dispatch(setUser(response.user))
      }
    })

    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
       // localStorage.setItem("token", data.token)
        //dispatch(setUser(data.user))
    })
}
export const updateUser = (userInfo) => dispatch => {
    //fetch(`https://zaina-api.herokuapp.com/users`, {
        fetch(`${baseURL}/users`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
        dispatch(setUser(response.user))
      }
    })

    .then(data => {
        // data sent back will in the format of
        // {
        //     user: {},
        //.    token: "aaaaa.bbbbb.bbbbb"
        // }
       // localStorage.setItem("token", data.token)
        //dispatch(setUser(data.user))
    })
}
export const deleteUser = (id) => dispatch => {
   return fetch(`${baseURL}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
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

export const userDetails = (uname) => dispatch => {
  return fetch(`${baseURL}/user_details`, {
      uname: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(uname)
    })
    .then(res => res.json())
    .then(response => {
      if (!!response.error) {
        alert(response.error)
      } else {
        alert(response.alert)
       
      }
    })
  
    //.then(data => data.json())
}


export const autoLogin = () => dispatch => {
    //fetch(`https://zaina-api.herokuapp.com/auto_login`, {
        fetch(`${baseURL}/auto_login`, {
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