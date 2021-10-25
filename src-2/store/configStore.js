import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./projects";

const configStore = () => {
  return configureStore({ reducer });
};

export default configStore;
