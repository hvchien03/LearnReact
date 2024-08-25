import { useReducer, useRef } from "react"
import { addTodo, deleteTodo, sẹtJob } from "./actions"
import reducer, { initialState } from "./reducer"
//useReducer
//4. dispatch(action): gửi action đến reducer

function App() {
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
export default App;