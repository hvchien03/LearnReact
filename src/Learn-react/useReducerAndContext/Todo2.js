import React from "react";
import { useStore } from "./hooks";
import * as actions from "./actions";
function Todo2(props) {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleSubmit = () => {
    dispatch(actions.addToDo(todoInput));
  };

  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter input..."
        className="border border-gray-500 w-1/2 h-10 pl-1"
        onChange={(e) => {
          dispatch(actions.setToDoInput(e.target.value));
        }}
      />
      <button
        className="border border-red-500 bg-black text-white w-20 h-10 ml-2"
        onClick={handleSubmit}
      >
        Add
      </button>

      {todos.map((todo, index) => (
        <div
          key={index}
          className="w-1/2 h-10 pl-1 mt-2"
        >
          {todo} <span className="text-red-500 ml-2">&times;</span>
        </div>
      ))}
    </div>
  );
}

export default Todo2;
