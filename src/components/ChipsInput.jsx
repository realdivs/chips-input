import { useState } from "react";

export const ChipsInput = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDeleteChip = (index) => {
    const filteredChips = chips.filter((chip, idx) => idx !== index);
    setChips(filteredChips);
  };

  return (
    <div className="container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press enter"
        value={inputText}
        className="input-box"
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div className="chip" key={index}>
            {chip} <button onClick={() => handleDeleteChip(index)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};
