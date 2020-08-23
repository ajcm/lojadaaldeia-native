import * as types from '../constants/basket';

export const addItem = id => ({ type: types.ADD_ITEM, id })
export const deleteItem = id => ({ type: types.DELETE_ITEM, id })
export const incrementQuantity = (id) => ({ type: types.INCREMENT_QUANTITY, id })
export const decrementQuantity = (id) => ({ type: types.DECREMENT_QUANTITY, id })
export const updateQuantity = (id, quantity) => ({ type: types.UPDATE_QUANTITY, id, quantity })
export const clearItems = () => ({ type: types.CLEAR_ITEMS })
