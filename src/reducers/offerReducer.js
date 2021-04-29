const defaultState = {
   offers: [],
   isLoading: false
}

const offerReducer = (state = defaultState, action) => {
    switch(action.type){        
        case "SET_OFFER":
            return {
                    isLoading: true,
                    offers: action.payload
                   }
        
        default: return state
    }
}

export default offerReducer