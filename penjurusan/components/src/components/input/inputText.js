import React from "react";
const InputText = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  placeholder,
  readOnly,
  label,
  ...props
}) => {
  return (
    <div>
      <label >{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      />
      <br />
    </div>
  );
};

export default InputText;
