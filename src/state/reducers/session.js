
import {
  RETRIEVE_TOKEN,
  LOGIN,
  LOGOUT,
  REGISTER
} from '../constants/session';

const initialSessionState = {
  isLoading: true,
  id: 0, 
  userName: null,
  userToken: null,
  email: null
};

export default session = (prevState = initialSessionState, action) => {
  switch(action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...prevState,
        id: action.id,
        email: action.email,
        userName: action.userName,
        name: action.name,
        userToken: action.userToken,
        isLoading: false,
      };
    case LOGOUT: 
      return {
        ...prevState,
        id: null,
        email: null,
        name: null,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case REGISTER: 
      return {
        ...prevState,
        id: action.id,
        email: action.email,
        userName: action.userName,
        name: action.name,
        userToken: action.userToken,
        isLoading: false,
      };
    default:
      return prevState;
  }
};
