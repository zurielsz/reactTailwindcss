import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoContext, TodoProvider } from "./TodoContext";

function App() {

  return (
    <TodoProvider>
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[900px] content-center justify-items-center">
        <div className="col-span-1 h-full w-full"></div>
        <div className=" col-span1 w-9/12 flex flex-col justify-around items-center border-2 border-link p-10 rounded-2xl h-[850px] bg-gradient-to-t from-gray-900 to-transparent">
          <TodoCounter/>
          <TodoSearch/>
          <TodoContext.Consumer>
            {({
              error,
              loading,
              searchTodos,
              completeTodo,
              deleteTodo,
            }) => (
              <>
              <TodoList>
              {error && <p>Hubo un error...</p>}
              {loading && <p>Estamos cargando...</p>}
              {(!loading && !searchTodos.length) && <p>Crea tu primer TODO...</p>}
              { searchTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={ () => completeTodo(todo.id) }
                  onDelete={ () => deleteTodo(todo.id) }
                  />
              ))}
            </TodoList>
            </>
            )};

          </TodoContext.Consumer>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
    </TodoProvider>
  );
}

// TODO: Realizar la función para que solo se filtren las completadas y las no completadas

export default App;
