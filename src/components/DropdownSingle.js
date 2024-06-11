import React from "react";

const DropdownSingle = ({ id, label, options }) => {
  return (
    <div className="DropdownSingleContainer">
      <label className="DropdownSingleLabel" htmlFor={id}>
        {label}
      </label>
      <select className="DropdownSingleSelect" id={id}>
        {options.map((option) => (
          <option key={option.reactKey} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSingle;
