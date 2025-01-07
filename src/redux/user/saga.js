import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersByIdFailure, fetchUsersByIdSuccess, fetchUsersFailure, fetchUsersSuccess } from "./slice";

function* fetchUsers(){
    try{
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSuccess(response.data))
    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

function* fetchUsersById(action){
    try{
        const id = action.payload
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${id}`)
        yield put(fetchUsersByIdSuccess(response.data))
    }catch(error){
        yield put(fetchUsersByIdFailure(error.message))
    }
}

export default all([
    // takeEvery é pra toda vez que o slice fetchUsers for acionado ele chamar o fetchUsers do saga 
    // user/fetchUsers se refere ao slice criado, o segundo fetchUsers é da função acima
    takeEvery("user/fetchUsers", fetchUsers),

    // Considera somente o último clique (caso usuário clique várias vezes ele chamará a função somente uma)
    // takeLatest("user/fetchUsers", fetchUsers)

    takeEvery("user/fetchUsersById", fetchUsersById)
])