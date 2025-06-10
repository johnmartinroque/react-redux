import React, { useEffect, useState } from "react";

function Input() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");

  const nameHandler = () => {
    setNames([...names, input]);
    setInput("");
    console.log(input);
    console.log(names);
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
          <div key={index}>{name}</div>
        ))}
      </h2>
    </div>
  );
}

export default Input;
