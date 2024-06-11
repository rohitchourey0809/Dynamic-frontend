import React from "react";

const RadioList = ({ id, label, sublabel, options }) => {
  return (
    <div className="RadioListContainer">
      <label className="RadioListLabel" htmlFor={id}>
        {label}
      </label>
      <p className="RadioListSublabel">{sublabel}</p>
      <div className="RadioListOptions">
        {options.map((option) => (
          <div key={option.reactKey} className="RadioListOption">
            <input
              type="radio"
              id={option.reactKey}
              name={id}
              value={option.value}
            />
            <label htmlFor={option.reactKey}>{option.display}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioList;
