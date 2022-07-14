import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";


import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import thunk from "redux-thunk";

// Utworzenie Reducera.
const reducer = combineReducers({
    user: userSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath],
};


const persistedReducer = persistReducer(persistConfig, reducer);

//Stworzenie Store !

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});


