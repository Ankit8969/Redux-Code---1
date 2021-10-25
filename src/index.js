import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { bugAdded, bugResolve } from "./actions";

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugResolve(1));

ReactDOM.render(<App />, document.getElementById("root"));
