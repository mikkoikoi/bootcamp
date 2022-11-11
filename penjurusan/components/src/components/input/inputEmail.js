import React from "react";
const InputEmail = ({
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
        type="email"
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

export default InputEmail;
