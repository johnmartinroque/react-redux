import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState();
  const [choice, setChoice] = useState();
  const [prevCount, setPrevCount] = useState(null);

  useEffect(() => {
    setCount(0);
  }, []);

  const minusCount = () => {
    setPrevCount(count);
    setCount(count - 1);
  };

  const addCount = () => {
    setPrevCount(count);
    setCount(count + 1);
  };

  const resetCount = () => {
    setPrevCount(count);
    setCount(0);
  };
  const updateCount = () => {
    const intChoice = parseInt(choice, 10);
    if (!isNaN(intChoice)) {
      setPrevCount(count);
      setCount(intChoice);
    }
    setChoice("");
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
      {prevCount !== null && <h1>Previous Count: {prevCount}</h1>}
    </div>
  );
}

export default Counter;
