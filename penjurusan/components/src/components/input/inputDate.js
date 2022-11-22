import moment from "moment";
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
    <label>{label}</label>
    <input
      type="date"
      name={name}
      value={moment(value, format).format('YYYY-MM-DD')}
      onChange={(e) =>
        onChange({
          value: moment(e.target.value, 'YYYY-MM-DD').format(format),
          name: e.target.name,
        })
      }
    />
  </div>
  );
};

export default InputDate;
