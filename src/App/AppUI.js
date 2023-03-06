import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList.js";
import { TodoItem } from "../components/TodoItem.js";
import { CreateTodoButton } from "../components/CreateTodoButton.js";
import{ TodoContext } from '../TodoContext';
import{ Modal } from '../Modal';
import{ TodoForm } from '../components/TodoForm';
import{ TodosError } from '../components/TodosError';
import{ TodosLoading } from '../components/TodosLoading';
import{ EmptyTodos } from '../components/EmptyTodos';


function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return(
    <React.Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[900px] content-center justify-items-center">
        <div className="col-span-1 h-full w-full"></div>
        <div className=" col-span1 w-9/12 flex flex-col justify-around items-center border-2 border-link p-10 rounded-2xl h-[850px] bg-gradient-to-t from-gray-900 to-transparent">
          <TodoCounter />
          <TodoSearch />
            <TodoList>
              { error && <TodosError error={error}/> }
              { loading && <TodosLoading /> }
              { (!loading && !searchedTodos.length) && <EmptyTodos /> }
              { searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={ () => completeTodo(todo.text) }
                  onDelete={ () => deleteTodo(todo.text) }
                />
                ))}
            </TodoList>

            { !!openModal && (
              <Modal>
              <TodoForm />
            </Modal>
            )}

          <CreateTodoButton setOpenModal={ setOpenModal } />
        </div>
    </div>
    </React.Fragment>
  )
}

export { AppUI };