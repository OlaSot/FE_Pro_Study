
export const addTaskAction = payload => ({type: 'ADD_TASK', payload})

export const taskReducer = (state=[], action) => {
    if(action.type === 'ADD_TASK'){
        return [...state, {id:Date.now(), task: action.payload}]
    }
    return state
}