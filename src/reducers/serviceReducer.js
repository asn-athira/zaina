const defaultState = {
   services: [],
   isLoading: false
}

const serviceReducer = (state = defaultState, action) => {
    switch(action.type){        
        case "SET_SERVICE":
            return {
            	    isLoading: true,
                    services: action.payload
                   }
        
        default: return state
    }
}

export default serviceReducer