const SET_TASK_TITLE = "SET_TASK_TITLE"
const SET_TASK_DESCRIPTION = "SET_TASK_DESCRIPTION"

function setTitle(title: string) {
    return {
        type: SET_TASK_TITLE,
        payload: title
    }
} 

function setDescription(description: string) {
    return {
        type: SET_TASK_DESCRIPTION,
        payload: description
    }
}

export { SET_TASK_DESCRIPTION, SET_TASK_TITLE, setTitle, setDescription }