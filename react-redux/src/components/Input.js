import React, { useEffect, useState } from "react";

function Input() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const [removed, setRemoved] = useState("");
  const [deletedItems, setDeletedItems] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [firstLetters, setFirstLetters] = useState([]);

  const nameHandler = () => {
    if (input.trim()) {
      setNames([...names, input]);
      setInput("");
    }
  };

  const removeHandler = (index) => {
    const nameToRemove = names[index];
    setRemoved(nameToRemove);
    setDeletedItems((prev) => [...prev, nameToRemove]);
    const updateNames = names.filter((_, i) => i !== index);
    setNames(updateNames);
  };

  const startEditing = (index) => {
    setEditedIndex(index);
    setEditedName(names[index]);
  };

  const saveEdit = (index) => {
    const updatedNames = [...names];
    updatedNames[index] = editedName;
    setNames(updatedNames);
    setEditedIndex(null);
    setEditedName("");
  };

  const reverse = () => {
    const reversedNames = names.slice().reverse();
    setNames(reversedNames);
  };

  const firstLettersHandler = () => {};

  useEffect(() => {
    setNames(["John", "Martin", "Roque", "ABC"]);
  }, []);

  return (
    <div style={{ backgroundColor: "blue", padding: "20px", color: "white" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={nameHandler}>Submit</button>

      <h2>
        NAMES:
        {names.map((name, index) => (
          <div key={index}>
            {editedIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                {name}
                <h1>
                  {name.charAt(0).toLowerCase() === "j"
                    ? "starts with j"
                    : name.charAt(0).toLowerCase() === "m"
                    ? "starts with m"
                    : "others"}
                </h1>

                <button onClick={() => startEditing(index)}>Edit</button>
              </>
            )}
            <button onClick={() => removeHandler(index)}>Remove</button>
          </div>
        ))}
      </h2>

      <h2>
        Deleted NAMES:
        {deletedItems.map((deleted, index) => (
          <div key={index}>{deleted}</div>
        ))}
      </h2>

      <h1>Last removed: {removed}</h1>
      <h2>Second to the last input: {names[names.length - 2]}</h2>
      <h2>Third to the last input: {names[names.length - 3]}</h2>
      <button onClick={reverse}>Reverse</button>
      <h2></h2>
    </div>
  );
}

export default Input;
