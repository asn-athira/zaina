const defaultState = {
    loggedIn: false,
    user: ''
    //user: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                loggedIn: true,               
                 
               user: action.payload
               //user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear();
             
            return {
                loggedIn: false,
                
                user: ''
            }
        default: return state
    }
}

export default userReducer