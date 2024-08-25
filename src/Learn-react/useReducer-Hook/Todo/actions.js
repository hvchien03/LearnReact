import { SET_JOB, ADD_TODO, DELETE_TODO } from './constants';

//2. Actions
export const sẹtJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index
    }
}