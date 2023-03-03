import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <div className="p-10 w-full">
        <h2 className="font-bold text-2xl text-center text-white font-nunito">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </div>
  );
}

export { TodoCounter };