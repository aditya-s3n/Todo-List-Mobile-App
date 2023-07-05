import { applyMiddleware, createStore, combineReducers } from "redux";

import newTaskReducer from "./reducer";
import allTasksReducer from "./allTasks/allTasksReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    newTask: newTaskReducer,
    allTasks: allTasksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store