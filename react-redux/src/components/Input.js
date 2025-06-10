import React, { useEffect, useState } from "react";

function Input() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");

  const nameHandler = () => {
    if (input.trim()) {
      setNames([...names, input]);
      setInput("");
    }
  };

  const removeHandler = (index) => {
    const updateNames = names.filter((_, i) => i !== index);
    setNames(updateNames);
  };
  return (
    <div style={{ backgroundColor: "blue" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={nameHandler} type="submit">
        submit
      </button>
      <h2>
        {names.map((name, index) => (
          <div key={index}>
            {name}
            <button onClick={() => removeHandler(index)}>remove</button>
          </div>
        ))}
      </h2>
    </div>
  );
}

export default Input;
