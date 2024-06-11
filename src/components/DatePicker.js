import React from "react";

const DatePicker = ({ id, label, sublabel }) => {
  return (
    <div className="DatePickerContainer">
      <label className="DatePickerLabel" htmlFor={id}>
        {label}
      </label>
      <input className="DatePickerInput" type="date" id={id} />
      <p className="DatePickerSublabel">{sublabel}</p>
    </div>
  );
};

export default DatePicker;
