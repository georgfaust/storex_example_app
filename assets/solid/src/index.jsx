import { render } from "solid-js/web";
import { from } from "solid-js";
import { createEffect } from "solid-js";
import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.Counter",
  params: {},
});

function Counter() {
  const state = from(store);
	
  createEffect(() => {
    console.log("The count is now", state()?.counter);
  });

  return (
    <>
      <button onClick={() => store.commit("inc")}>inc</button>
      <button onClick={() => store.commit("dec")}>dec</button>
      <button onClick={() => store.commit("set", 0)}>set 0</button>
    </>
  );
}

render(() => <Counter />, document.getElementById("root"));
