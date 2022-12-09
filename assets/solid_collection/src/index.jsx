import { render } from "solid-js/web";
import { For } from "solid-js";
import { createStore, reconcile } from "solid-js/store";

import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.TodoCollection",
  params: {},
});

const App = () => {
  let input;

  const [todos, setTodos] = createStore([]);

  // does not work
  // store.subscribe((update) => {
  // 	console.log("update", update);
  // 	if (update) setTodos(reconcile(update));
  // });

  store.subscribe((update) => {
    if (update) {
			let update_ = update.map((item) => ({...item}));
      setTodos(reconcile(update_));
    }
  });

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
      <For each={todos}>
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
