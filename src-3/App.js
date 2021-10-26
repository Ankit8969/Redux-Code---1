import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./store/action";

const App = () => {
  const myState = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      <button
        style={{ height: "40px", fontSize: "1.2rem" }}
        onClick={() => dispatch(inc())}
      >
        Increment
      </button>
      <input
        type="text"
        value={myState}
        style={{ height: "40px", fontSize: "1.2rem" }}
      />
      <button
        style={{ height: "40px", fontSize: "1.2rem" }}
        onClick={() => dispatch(dec())}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
