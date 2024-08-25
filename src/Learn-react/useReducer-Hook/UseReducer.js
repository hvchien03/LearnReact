import { useReducer } from "react"
//useReducer giúp quản lý state của component phức tạp hơn
//useReducer sẽ thay thế các trường hợp sử dụng nhiều useState
//nếu init state phức tạp thì nên sử dụng useReducer thay vì useState


//useState
//1. init state
//2. Actions: Up(state + 1), Down(state - 1)

//useReducer
//1. init state
//2. Actions: Up(state + 1), Down(state - 1)
//3. reducer: nhận vào state và action, trả về state mới
//4. dispatch(action): gửi action đến reducer

//init state
const initialState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//reducer
const reducer = (state, action) => {
    console.log('reducer running...')
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Action invalid')
    }
}

function UseReducerApp() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button className="bg-black text-white mx-5" onClick={() => dispatch(UP_ACTION)}>Up</button>
            <button className="bg-black text-white" onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        </div>
    )
}
export default UseReducerApp;