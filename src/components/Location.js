import React from "react";

const Location = ({ id, label, sublabel }) => {
  return (
    <div className="LocationContainer">
      <label className="LocationLabel" htmlFor={id}>
        {label}
      </label>
      <input className="LocationInput" type="text" id={id} />
      <p className="LocationSublabel">{sublabel}</p>
    </div>
  );
};

export default Location;
