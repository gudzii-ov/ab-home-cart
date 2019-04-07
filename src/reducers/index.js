import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

import * as actions from '../actions';

const products = handleActions({
  [actions.addProduct](state, { payload: { data: product } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [product.id]: product },
      allIds: [...allIds, product.id],
    };
  },
  [actions.editProduct](state, { payload: { data: product } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [product.id]: product },
      allIds,
    };
  },
  [actions.removeProduct](state, { payload: { data: id } }) {
    const { byId, allIds } = state;
    return {
      byId: _.omitBy(byId, product => product.id === id),
      allIds: allIds.filter(currentId => currentId !== id),
    };
  },
}, { byId: {}, allIds: [] });

export default combineReducers({
  products,
  form: formReducer,
});
