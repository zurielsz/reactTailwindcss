import React from "react";

function TodosLoading() {
  return (
    <div className="w-full flex justify-evenly animate-pulse h-10">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>

    </div>

  );
}

export { TodosLoading };

