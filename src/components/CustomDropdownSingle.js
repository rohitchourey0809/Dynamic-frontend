import React, { useEffect } from "react";
import "./CustomDropdownSingle.css"; // Import CSS file for styling

const CustomDropdownSingle = ({ id, label, options }) => {
  useEffect(() => {
    console.log(`CustomDropdownSingle mounted: ${id}`);
    return () => {
      console.log(`CustomDropdownSingle unmounted: ${id}`);
    };
  }, [id]);

  return (
    <div className="custom-dropdown-single-container">
      <label className="custom-dropdown-single-label" htmlFor={id}>
        {label}
      </label>
      <select className="custom-dropdown-single-select" id={id}>
        {options.map((option) => (
          <option key={option.reactKey} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdownSingle;
