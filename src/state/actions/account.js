import * as types from '../constants/account';


export const loadProfile = userId => {
    return async (dispatch, getState) => {      
        dispatch({ type: types.START_LOAD_PROFILE });
        userAPI.fetchById(userId).then(profile => {
            dispatch({ type: types.FINISH_LOAD_PROFILE });
        }).catch(error => {
            dispatch({ type: types.ERROR_LOAD_PROFILE });
        })
    }
}

export const addAddress = (address) => {
    dispatch({ type: types.ADD_ADDRESS, address });
}