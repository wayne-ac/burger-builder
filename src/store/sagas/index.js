import { takeEvery, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './authSaga';
import { initIngredientsSaga } from './burgerBuilderSaga';
import { purchaseBurgerSaga, fetchOrdersSaga } from './orderSaga';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
