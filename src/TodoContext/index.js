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
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length;
  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => 
      {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);

      }
    )
  }

  const completeTodo = (id) => {
    // Hay que obtener el id del TODO, hay que encontrar el indice (por el arreglo)
    const todoIndex = todos.findIndex(todo => todo.id == id);
    // Vamos a clonar la lista de todos
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);
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
      searchTodos,
      completeTodo,
      deleteTodo
     }}>
      {props.children}
    </TodoContext.Provider>

  )
}
<TodoContext.Consumer></TodoContext.Consumer>


export { TodoContext, TodoProvider }