import { render } from "solid-js/web";
import { from, For } from "solid-js";

import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.TodoCollection",
  params: {},
});

const App = () => {
  let input;

  // adding new elements works but toggling does not
  const todos = from(store);

  const addTodo = (text) => store.commit("add", text);
  const toggleTodo = (id) => store.commit("toggle", id);

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  "text-decoration": todo.completed ? "line-through" : "none",
                }}
              >
                {text}
              </span>
            </div>
          );
        }}
      </For>
    </>
  );
};

render(App, document.getElementById("app"));
