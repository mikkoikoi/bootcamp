import React from "react";
const InputRange = ({
  name,
  value,
  onChange,
  step,
  label,
  min,
  max,
  ...props
}) => {

  return (
    <div>
      <label >{label}</label>
      <input
        type="range"
        name={name}
        value={value}
        step={step}
        onChange={onChange}
       
        min={min}
        max={max}
        
        {...props}
      />
      <br />
    </div>
  );
};

export default InputRange;