
import {
  ADD_ITEM
  //,
  // DELETE_ITEM,
  // INCREMENT_QUANTITY,
  // DECREMENT_QUANTITY,
  // UPDATE_QUANTITY,
  // CLEAR_ITEMS
} from '../constants/basket';

const initialState = {  
    items: [],
    isLoading: false,
    isDataReady:  false,
    hasError: false
}

export default function basket(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const newState = {
        ...state,
        items: [...state.items, action.id]
      };

      return newState;
    default:
      return state;
  }
}

