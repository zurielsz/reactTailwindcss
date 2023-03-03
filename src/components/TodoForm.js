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
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  return (
    <form
      className="bg-red-300 w-full h-full"
      onSubmit={onSubmit}
    >
      <label>Tarea</label>
      <textarea
        value={ newTodoValue }
        onChange={ onChange }
        placeholder="tarea"
      ></textarea>
      <div>
        <button
        type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
        type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };