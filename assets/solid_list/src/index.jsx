import { render } from "solid-js/web";
import { from, For } from "solid-js";
import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.Todos",
  params: {},
});

function App() {
  let input;

  const state = from(store);

  const addTodo = (text) => store.commit("add_todo", text);

  return (
    <>
      <input ref={input} />
      <button
        onClick={(e) => {
          if (!input.value.trim()) return;
          addTodo(input.value);
          input.value = "";
        }}
      >
        Add TODO
      </button>
      <ul>
        <For each={state()?.todos}>
          {(todo, i) => {
            console.log("creating", todo);
            return (
              <li>
                {i() + 1}: {todo}
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}

render(() => <App />, document.getElementById("app"));
