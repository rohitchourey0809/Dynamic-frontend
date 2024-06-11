import React from "react";

const CheckboxList = ({ id, label, options }) => {
  return (
    <div className="CheckboxListContainer">
      <label className="CheckboxListLabel">{label}</label>
      <div className="CheckboxListOptions">
        {options.map((option) => (
          <div key={option.reactKey} className="CheckboxListOption">
            <input type="checkbox" id={option.reactKey} value={option.value} />
            <label htmlFor={option.reactKey}>{option.display}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
