import React from "react";
const InputOption = ({
  name,
  value,
  onChange,
  disabled,
  placeholder,
  readOnly,
  label,
  optionData,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      <select
        name={name}
        value={value}
        // placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {optionData.map((item, i) => {
          return (
            <option key={`buat-drop-${i}`} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <br />
    </div>
  );
};

export default InputOption;
