import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState();
  const [choice, setChoice] = useState();

  useEffect(() => {
    setCount(0);
  }, []);

  const minusCount = () => {
    setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const updateCount = () => {
    setCount(choice);
  };

  return (
    <div>
      <button onClick={minusCount}>-</button>
      <h2>Count: {count}</h2>
      <button onClick={addCount}>+</button>
      <button onClick={resetCount}>RESET</button>
      <input
        type="text"
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
      />
      <button onClick={updateCount}>SUBMIT</button>
    </div>
  );
}

export default Counter;
