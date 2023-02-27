import React from "react";

function TodoList(props) {
  return (
    <section className="text-link w-full pt-5 font-nunito font-extralight overflow-y-auto px-2">
      <ul className="">{ props.children }</ul>
    </section>
  );
}

export { TodoList };