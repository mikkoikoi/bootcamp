import React from "react";
const InputDate = ({
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
        type="date"
        name={name}
        value={value}
   
        onChange={onChange}
      
        {...props}
      />
      <br />
    </div>
  );
};

export default InputDate;
