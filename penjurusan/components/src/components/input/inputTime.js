import React from "react";
const InputTime = ({
  name,
  value,
  onChange,
  label,
  format,
  ...props
}) => {
  return (
    <div>
      <label >{label}</label>
      <input
        type="time"
        name={name}
        value={value}
   
        onChange={onChange}
      
        {...props}
      />
      <br />
    </div>
  );
};

export default InputTime;
