import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  // Estado para modal 
  const[openModal, setOpenModal] = React.useState(false);


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => 
      {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);

      }
    )
  }

  const addTodo = (text) => {
    // if (!text.trim()) return;
    const newTodos = [...todos];
    newTodos.push({
      completed:false,
      text,
    })
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    // Hay que obtener el id del TODO, hay que encontrar el indice (por el arreglo)
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // Vamos a clonar la lista de todos
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
    <TodoContext.Provider value={{ 
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
     }}>
      {props.children}
    </TodoContext.Provider>
);}


export { TodoContext, TodoProvider }