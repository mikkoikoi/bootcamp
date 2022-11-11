import React from "react";
const InputNumber = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  placeholder,
  readOnly,
  label,
  min,
  max,
  ...props
}) => {
 const blockInvalidChar = e => ['e', 'E', '+'].includes(e.key) && e.preventDefault();
  return (
    <div>
      <label >{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        onClick={handleClick}
        min={min}
        max={max}
        onKeyDown={blockInvalidChar}
        {...props}
      />
      <br />
    </div>
  );
};

export default InputNumber;