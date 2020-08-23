import { combineReducers } from 'redux';
import basket from './basket';
import session from './session'

const rootReducer = combineReducers({
    basket,
    session
})

export default rootReducer
