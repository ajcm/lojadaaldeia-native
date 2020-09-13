
import {
  TOGGLE_THEME
} from '../constants/settings';

const initialState = {  
    isDarkTheme: false,
    isLoading: false,
    isDataReady:  false,
    hasError: false
}

export default function settings(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      const newState = {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };

      return newState;
    default:
      return state;
  }
}

