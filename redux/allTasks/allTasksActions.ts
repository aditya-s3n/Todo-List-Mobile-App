const SET_TASKS = 'SET_TASKS'

function setTask(task: any) {
    return {
        type: SET_TASKS,
        payload: task
    }
}

export { SET_TASKS, setTask }