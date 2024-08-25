import { useReducer, useRef } from "react"

//useReducer
//1. init state
const initialState = {
    job: '',
    jobs: []
}
//2. Actions
const SET_JOB = 'set_job'
const ADD_TODO = 'add_todo'
const DELETE_TODO = 'delete_todo'

const sẹtJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        index
    }
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
//4. dispatch(action): gửi action đến reducer

function TodoApp() {
    const focusRef = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addTodo(job))
        dispatch(sẹtJob(''))
        focusRef.current.focus()
    }

    return (
        <div className="container w-full m-auto py-10">
            <h3 className="text-2xl font-bold">Todo App</h3>
            <div className="flex items-center mt-5">
                <input
                    ref={focusRef}
                    type="text"
                    value={job}
                    placeholder="Add new todo..."
                    className="border border-gray-400 w-1/2 p-2"
                    onChange={(e) => {
                        dispatch(sẹtJob(e.target.value))
                    }}
                />
                <button
                    className="bg-black text-white p-2 ml-5"
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
            <ul className="mt-5">
                {jobs.map((job, index) => (
                    <li key={index} className="flex items-center justify-between p-2">
                        {job} <span onClick={() => { dispatch(deleteTodo(index)) }}>&times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp;