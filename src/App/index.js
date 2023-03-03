import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

// TODO: Realizar la función para que solo se filtren las completadas y las no completadas

export default App;


