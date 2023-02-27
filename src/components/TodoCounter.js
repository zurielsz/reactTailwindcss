import React from "react";

function TodoCounter({total, completed}) {
  // Si deseamos utilizar esas propiedades, se pueden pasar en los argumentos del componente 
  // Esto es equivalente a
  // const {total, completed} = props


  return (
    <div className="p-10 w-full">
        <h2 className="font-bold text-2xl text-center text-white font-nunito">Has completado {completed} de {total} TODOs</h2>
    </div>
  );
}

export { TodoCounter };