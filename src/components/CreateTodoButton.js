import React from "react";

function CreateTodoButton(props) {
// Forma 2
  const onCliclkButton = (msg) => {
    alert(msg);
  }
  return (
    <button
      className="p-4 text-xl font-semibold transition-all duration-500 ease-in-out transform bg-link rounded-full hover:shadow-sm hover:shadow-gray-400 hover:text-blue-900 hover:-translate-y-1 hover:scale-105"
      onClick={() => onCliclkButton('Mensaje personalizado')}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
      </svg>
    </button>
  );
}

export { CreateTodoButton };