import { all, fork } from "redux-saga/effects"; 
import getImages from "./getImages";

// Redux Saga: Root Saga
export function* rootSaga() {
    yield all([
        fork(getImages),
    ]);
}
