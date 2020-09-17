import { combineReducers } from 'redux';
import basket from './basket';
import session from './session';
import settings from './settings';
import account from './account';

const rootReducer = combineReducers({
    basket,
    session,
    settings,
    account
})

export default rootReducer
