import React from "react";

function TodoList(props) {
  return (
    <section className="text-link w-full pt-5">
      <ul className="">{ props.children }</ul>
    </section>
  );
}

export { TodoList };