import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

// Middleware serve para quando uma função é chamada ele também ser chamado para comunicar com API por exemplo.
sagaMiddleware.run(rootSaga)