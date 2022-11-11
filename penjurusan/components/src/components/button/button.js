import React from "react";
const PressButton = ({ name, onClick, label, disabled }) => {
 return (
  <button type="button" name={name} onClick={onClick} disabled={disabled}>
    {label}
  </button>
 );
};

export default PressButton;
