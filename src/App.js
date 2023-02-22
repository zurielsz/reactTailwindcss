import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList.js";
import { TodoItem } from "./components/TodoItem.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";

const todos = [
  { id: 1, text: 'Cortar cebolla', completed: true },
  { id: 2, text: 'Tomar curso', completed: true },
  { id: 3, text: 'Llorar con la llorona', completed: false },
  { id: 4, text: 'Personalizado', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[900px] content-center justify-items-center">
        <div className="col-span-1 h-full w-full">
        </div>
        <div className=" col-span1 w-9/12 flex flex-col justify-around items-center border-2 border-link p-10 rounded-2xl h-[850px] bg-gradient-to-t from-gray-900 to-transparent">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                />
            ))}
          </TodoList>
          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
