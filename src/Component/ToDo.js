import React, { useState } from "react";

function ToDo(props) {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value.trim());
  };
  const newHandle = () => {
    props.addList(inputText);
    setInputText("");
  };
  return (
    <>
      <div className="input-conatainer">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Write here....."
          onChange={handleInput}
        />
        <button className="add-btn" onClick={newHandle}>
          +
        </button>
      </div>
    </>
  );
}

export default ToDo;
