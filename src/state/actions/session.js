import * as types from '../constants/session';


export const logout = () => ({ type: types.LOGOUT })

export const login = (userName, phone, accessToken) => {
    return async (dispatch, getState) => {
        try {            
            await AsyncStorage.setItem('userName', userName);
            await AsyncStorage.setItem('phone', phone);
            await AsyncStorage.setItem('accessToken', accessToken);
        } catch(e) {
            // console.log(e);
        }
        
        dispatch({ type: types.LOGIN, userName: userName, phone: phone, accessToken: accessToken });
    }
}

export const register = (id, name, token) => {
    return async (dispatch, getState) => {
        try {
            await AsyncStorage.setItem('id', id);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('userName', userName);
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
            // console.log(e);
        }

        dispatch({ type: types.REGISTER, id: id, email: email, userName: userName, name: name, userToken: userToken });
    }
}


export const retrieveToken = (appId) => {
    return async (dispatch, getState) => {
        let userToken = null;
        let name = null;

        try {
            userToken = await AsyncStorage.getItem('userToken');
            name = await AsyncStorage.getItem('name');
        } catch(e) {
            // console.log(e);
        }

        dispatch({ type: types.RETRIEVE_TOKEN, name: name, userToken: userToken });
    }
}