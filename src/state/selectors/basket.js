import { createSelector } from 'reselect'


const getItems = state => state.basket.items;

export const getItemsSelector = createSelector(
    getItems,
    items => items
);
