import React from "react";

function TodoItem (props) {
  return (
    <li className="flex justify-between w-full p-2 my-1 border-2 rounded-lg border-link">
      <span 
        className={`${props.completed ? 'text-green-500': 'text-white'}`}
        onClick = { props.onComplete }
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
        </svg>
      </span>
      <p className={` pl-4 w-full ${props.completed && 'text-green-500 line-through'}`}>
        {props.text}
      </p>
      <span 
        className="text-white hover:text-red-600"
        onClick = {props.onDelete}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
    </li>
  );
}

export { TodoItem  };