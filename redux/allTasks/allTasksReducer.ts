import { SET_TASKS } from "./allTasksActions"

const initialState = {
    allTasks: []
}

function allTasksReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_TASKS:
            return {...state, allTasks: [...state.allTasks, action.payload]}

        default:
            return state
    }
}

export default allTasksReducer