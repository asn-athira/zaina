const defaultState = {
    loggedIn: false,
    //user: ''
    token:''
    //user: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                loggedIn: true,               
                 
               token: action.payload
               //user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear();
             
            return {
                loggedIn: false,
                
                token: ''
            }
        default: return state
    }
}

export default userReducer