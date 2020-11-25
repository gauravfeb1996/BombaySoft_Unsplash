import {
    all,
    fork,
    takeLatest,
    put,
    call,
  } from 'redux-saga/effects';
// import * as actions from '../actions/actionMethods';
import * as actions from '../constants/getImages';
import { getImagesSuccess } from '../actions/getImages';
import apiHandler from '../../utils/api/apiHandler.js';
import { BASE_URL } from '../../utils/constants';

function* getImagesRequestSaga(action) {
    try {
        const res = yield call(apiHandler.getDataAPI, `${BASE_URL}&page=${action.pageNo}&query=${action.key? action.key: 'random'}`);
        yield put(getImagesSuccess(res));
    } catch (error) {
        console.log(error);
    }
}


export function* watchGetIssuesRequestSaga() {
    yield takeLatest(actions.GET_IMAGES_REQUEST, getImagesRequestSaga);
}

export default function* rootSaga() {
    yield all([fork(watchGetIssuesRequestSaga)]);
}
  