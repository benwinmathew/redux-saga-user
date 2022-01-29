import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => {throw error})
}

// function getApi() {
//     return axios.get, 'https://jsonplaceholder.typicode.com/users'
// }

// function getApi() {
//     return axios
//       .get(apiUrl)
//       .then((response) => response.json())
//       .catch((err) => {
//         throw err;
//       });
// }

function* fetchUsers(action) {
    try{
        const users = yield call(getApi)
        yield put({
            type: 'GET_USERS_SUCCESS',
            users: users
        })
    }catch(e) {
        yield put({
            type: 'GET_USER_FAILED',
            messege: e.messege
        })
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

function* userSaga() {
    yield takeEvery('GET_USERS_REQUEST', fetchUsers);
}

export default userSaga;