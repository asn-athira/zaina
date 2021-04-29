import userReducer from './userReducer'
import offerReducer from './offerReducer'
import serviceReducer from './serviceReducer'

import commentReducer from './commentReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    offerReducer,
    serviceReducer,
    commentReducer
})

export default rootReducer