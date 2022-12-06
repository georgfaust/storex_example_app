import Storex from "storex";

const store = new Storex({
  store: "ExampleApp.Store.Counter",
  params: {},
  subscribe: (state) => {
    var state = state;
    console.log("new state", state);
  },
  connection: (state) => console.log(state ? "con" : "discon"),
});

var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

inc.addEventListener("click", () => store.commit("inc"));
dec.addEventListener("click", () => store.commit("dec"));
