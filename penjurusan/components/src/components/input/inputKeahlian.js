import React, { Fragment } from "react";
const InputKeahlian = ({
  name,
  value,
  onChange,
  handleClick,
  disabled,
  label,
  optionData,
  ...props
}) => {
  return (
    <div>
      <label>{label}</label>
      {optionData.map((item, i) => {
        return (
          <Fragment key={`checkbox-cuy-${i}`}>
            <input
              type="checkbox"
              name={name}
              value={item.value}
              onChange={onChange}
              disabled={disabled}
              onClick={handleClick}
              {...props}
            />
            <label>{item.label}</label>
          </Fragment>
        );
      })}
      <br />
    </div>
  );
};

export default InputKeahlian;
