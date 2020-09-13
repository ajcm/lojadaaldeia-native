import { combineReducers } from 'redux';
import basket from './basket';
import session from './session';
import settings from './settings';

const rootReducer = combineReducers({
    basket,
    session,
    settings
})

export default rootReducer
