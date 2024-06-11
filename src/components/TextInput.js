import React from "react";

const TextInput = ({ id, label, placeholder }) => {
  return (
    <div className="TextInputContainer">
      <label className="TextInputLabel" htmlFor={id}>
        {label}
      </label>
      <input
        className="TextInputInput"
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
