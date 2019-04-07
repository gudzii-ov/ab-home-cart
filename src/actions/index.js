import { createAction } from 'redux-actions';

export const addProduct = createAction('PRODUCT_ADD');
export const editProduct = createAction('PRODUCT_EDIT');
export const removeProduct = createAction('PRODUCT_REMOVE');
export const updateTotalCost = createAction('TOTAL_COST_UPDATE');
