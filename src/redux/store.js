import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from './duck/ToDo';
import { combineReducers } from "@reduxjs/toolkit";



const reducer = combineReducers({
    ToDo: ToDoReducer,
})

const store = configureStore({
    reducer
})

export default store;