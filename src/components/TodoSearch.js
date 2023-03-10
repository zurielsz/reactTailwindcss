import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="relative w-full">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <span className="text-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      <input
        type="search"
        placeholder="Buscar"
        className="block w-full pl-10 p-2.5 border-b-2 text-link border-link bg-transparent focus:bg-black focus:rounded-lg placeholder:text-link text-sm focus:shadow-md focus:shadow-link focus:ring-2 focus:ring-black focus:ring-offset-0 focus:outline-none  focus:border-none"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };