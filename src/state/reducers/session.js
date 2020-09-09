
import {
  RETRIEVE_TOKEN,
  LOGIN,
  LOGOUT,
  REGISTER
} from '../constants/session';

const initialSessionState = {
  isLoading: true,
  userName: null,
  phone: null,
  accessToken: null,
  email: null
};

export default function session(prevState = initialSessionState, action) {
  switch(action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...prevState,
        accessToken: action.accessToken,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...prevState,
        userName: action.userName,
        phone: action.phone,
        accessToken: action.accessToken,
        isLoading: false,
      };
    case LOGOUT: 
      return {
        ...prevState,
        userName: null,
        accessToken: null,
        phone: null,
        isLoading: false,
      };
    case REGISTER: 
      return {
        ...prevState,
        userName: action.userName,
        phone: action.phone,
        accessToken: action.accessToken,
        isLoading: false,
      };
    default:
      return prevState;
  }
};
