import { all } from "redux-saga/effects";
import user from "./user/saga"

// function* como se fosse o async e o yield como se fosse o await
export default function* rootSaga(){
    return yield all([
        user
    ])
}