import { render } from "solid-js/web";
import { For } from "solid-js";
import { createStore, reconcile } from "solid-js/store";

import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.CatsCollection",
  params: {},
});

function App() {
  const [cats, setCats] = createStore([]);

  store.subscribe((cats) => {
		if(cats) {
			console.log("cats", cats);

			// does work
			// update = cats.map((cat) => ({id: cat.id, text: cat.text}))
			update = cats.map((cat) => ({...cat}))

			// does not work
			// update = [...cats]
			// update = cats
			
			console.log("update", update);
			setCats(reconcile(update));
		}
  });

  const addCat = (text) => store.commit("add", text);
  // const toggleTodo = (id) => store.commit("toggle", id);

  
  return (
    <>
      <button onClick={() => addCat("aaa")}>cat aaa</button>
      <button onClick={() => addCat("bbb")}>cat bbb</button>
      <button onClick={() => addCat("ccc")}>cat ccc</button>

      <ul>
        <For each={cats}>
          {(cat, i) => (
            <li>
              {i() + 1}: {cat.text}
            </li>
          )}
        </For>
      </ul>
    </>
  );
}

render(() => <App />, document.getElementById("app"));
