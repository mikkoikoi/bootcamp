import React from "react";
const InputPassword = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  placeholder,
  readOnly,
  label,
  minLength,
  style,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="password"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        onClick={handleClick}
        minLength={minLength}
        style={{
          ...style,
          borderColor: value.length < minLength || value.length === "" ? "red" : "grey",
        }}
        {...props}
      />
      <br />
    </div>
  );
};

export default InputPassword;
