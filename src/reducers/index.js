import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { omitBy, sumBy } from 'lodash';

import * as actions from '../actions';

const products = handleActions({
  [actions.addProduct](state, { payload: { data: product } }) {
    const { byId, allIds } = state;
    const newById = { ...byId, [product.id]: product };
    const newAllIds = [...allIds, product.id];
    const totalCost = sumBy(newAllIds, id => newById[id].price);

    return {
      byId: { ...newById },
      allIds: [...newAllIds],
      totalCost,
    };
  },
  [actions.editProduct](state, { payload: { data: product } }) {
    const { byId, allIds } = state;
    const newById = { ...byId, [product.id]: product };

    return {
      byId: { ...newById },
      allIds,
      totalCost: sumBy(allIds, id => newById[id].price),
    };
  },
  [actions.removeProduct](state, { payload: { data: id } }) {
    const { byId, allIds } = state;
    const newById = omitBy(byId, product => product.id === id);
    const newAllIds = allIds.filter(currentId => currentId !== id);
    return {
      byId: { ...newById },
      allIds: [...newAllIds],
      totalCost: sumBy(newAllIds, subId => newById[subId].price),
    };
  },
}, { byId: {}, allIds: [], totalCost: 0 });

const modalUIState = handleActions({
  [actions.toggleModal](state, { payload: { modalDisplay } }) {
    return { modalDisplay };
  },
}, { modalDisplay: 'hide' });

const modalState = handleActions({
  [actions.setModalState](state, { payload: { id } }) {
    return { id };
  },
}, { id: 0 });

export default combineReducers({
  products,
  modalState,
  modalUIState,
  form: formReducer,
});
