import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configStore from "./store/configStore";
import { bugAdded, bugResolve } from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configStore();

store.subscribe(() => {
  console.log("Changed");
});

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolve({ id: 1 }));

store.dispatch(projectAdded({ description: "First Project" }));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// For Big Project don't import all the files using * because it is a bad practice it cause memory
