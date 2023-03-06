import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.trim().length <=0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form
      className="w-full h-full flex flex-col py-5 justify-around"
      onSubmit={onSubmit}
    >
      <textarea
        className="py-5 px-2 w-full border-2 rounded-lg text-link border-link bg-transparent focus:bg-black placeholder:text-link text-sm focus:shadow-md focus:shadow-link focus:ring-2 focus:ring-black focus:ring-offset-0 focus:outline-none  focus:border-none resize-none"
        value={ newTodoValue }
        onChange={ onChange }
        placeholder="Ingresa un TODO"
      ></textarea>
      <div className="py-5 flex justify-between space-x-7 font-semibold text-white">
        <button
          className="w-3/4 ring-2 ring-red-400 bg-red-400 py-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-red-400"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-3/4 ring-2 ring-green-400 bg-green-400 py-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-transparent hover:text-green-400"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };