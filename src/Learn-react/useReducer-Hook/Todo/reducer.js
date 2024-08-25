import { ADD_TODO, DELETE_TODO, SET_JOB } from './constants'

//1. init state
export const initialState = {
    job: '',
    jobs: []
}

//3. reducer
const reducer = (state, action) => {
    console.log('Action: ', action)
    console.log('Prev state: ', state)
    let new_state
    switch (action.type) {
        case SET_JOB: {
            new_state = {
                ...state,
                job: action.payload
            }
            break
        }
        case ADD_TODO: {
            new_state = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        }
        case DELETE_TODO: {
            new_state = {
                ...state,
                jobs: state.jobs.filter((job, index) => index !== action.index)
            }
            break
        }
        default:
            throw new console.error('Action invalid')
    }
    console.log('New state: ', new_state)
    return new_state
}
export default reducer