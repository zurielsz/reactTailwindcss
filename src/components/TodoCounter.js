import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {

  const { totalTodos, completedTodos } = React.useContext(TodoContext)

  return (
    <div className="p-4 w-full text-center text-white bg-gradient-to-b from-black rounded-2xl">
      { totalTodos===0 && <p className="font-bold text-lg text-red-500">Crea tu primer TODO</p> }
      { totalTodos !== completedTodos && <h2 className="font-bold text-lg">Completado {completedTodos} de {totalTodos} TODOs</h2> }
      { (totalTodos>0 && totalTodos === completedTodos) && <p className="font-bold text-lg text-center text-green-500">Felicidades TODOs Finalizados</p> }
    </div>
  );
}

export { TodoCounter };