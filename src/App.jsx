import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const [state, setState] = useState("hello"); //  ['hello', () => {}]
  const [counter, setCounter] = useState(0); // tuple -> kortej

  const handleHello = () => {
    setState((prevState) => {
      return prevState === "hello" ? "bye" : "hello";
    });
  };

  useEffect(() => {
    console.log("did mount");

    return () => {
      console.log("will unmount");
    };
  }, [counter]);

  const handleClick = (number) => setCounter((prev) => prev + number);
  const reset = () => setCounter(0);

  return (
    <div className="App">
      {state === "hello" && <Table />}
      <h1>{state}</h1>
      <button onClick={handleHello}>Click</button>

      <p>{counter}</p>
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(-1)}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

// function foo(initialState) {
//   let state = initialState

//   function bla(value) {
//     state = value
//   }

//   return [state, bla]
// }

// const [valod, samson] = foo('hello') // ['hello', bla]

// console.log(valod, samson()) // 'hello'
