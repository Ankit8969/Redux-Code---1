import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change, change_list } from "./store/action";

const list1 = [1, 2, 3, 4];
const list2 = [4, 5, 2, 3];
const list3 = [5, 6, 5, 6, 2];

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("changed");
  }, [state.name]);

  return (
    <div className="buttons">
      <h2>Set NAME</h2>
      <button
        style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
        onClick={() => dispatch(change({ name: "ANKIT" }))}
      >
        ANKIT
      </button>
      <button
        style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
        onClick={() => dispatch(change({ name: "SONU" }))}
      >
        SONU
      </button>
      <button
        style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
        onClick={() => dispatch(change({ name: "KARAN" }))}
      >
        KARAN
      </button>

      <div>
        <h2>Set The List</h2>
        <button
          style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
          onClick={() => dispatch(change_list({ list: list1 }))}
        >
          CHOTU
        </button>
        <button
          style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
          onClick={() => dispatch(change_list({ list: list2 }))}
        >
          MONU
        </button>
        <button
          style={{ height: "40px", fontSize: "1.2rem", margin: "20px" }}
          onClick={() => dispatch(change_list({ list: list3 }))}
        >
          MANISH
        </button>
      </div>

      <h2>{state.name}</h2>
      <h2>
        {state.list.map((value) => {
          return <h2>{value}</h2>;
        })}
      </h2>
    </div>
  );
};

export default App;
