import { SET_TASK_DESCRIPTION, SET_TASK_TITLE } from "./actions";

const initialState = {
    title: "",
    description: ""
}

function newTaskReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_TASK_TITLE:
            return {...state, title: action.payload}
        
        case SET_TASK_DESCRIPTION:
            return {...state, description: action.payload}

        default:
            return state
    }
}

export default newTaskReducer