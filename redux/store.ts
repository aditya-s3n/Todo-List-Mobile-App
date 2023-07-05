import { applyMiddleware, createStore, combineReducers } from "redux";

import newTaskReducer from "./reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    newTask: newTaskReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store