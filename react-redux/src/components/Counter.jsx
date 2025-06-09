import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState();
  useEffect(() => {
    setCount(0);
  }, []);

  const minusCount = () => {
    setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 10);
  };

  return (
    <div>
      <button onClick={minusCount}>-</button>
      <h2>Count: {count}</h2>
      <button onClick={addCount}>+</button>
    </div>
  );
}

export default Counter;
