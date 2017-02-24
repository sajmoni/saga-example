import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import Api from '...'

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
