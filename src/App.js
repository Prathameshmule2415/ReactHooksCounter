import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter app using Hooks</h1>
      </header>
      <h1>Current Value of counter is {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => (count > 9 ? "" : setCount(count + 1))}>
        Increment
      </button>
      <button onClick={() => (count < 1 ? "" : setCount(count - 1))}>
        Decrement
      </button>
    </div>
  );
};

export default App;
