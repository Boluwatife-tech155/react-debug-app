import React, { useState } from "react";

function Counter(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Count: {props.count}</p>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Debugging App</h1>

      <Counter title="My Counter" count={count} />

      <button onClick={increase}>Increase</button>
    </div>
  );
}