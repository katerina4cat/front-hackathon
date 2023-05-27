import React from "react";
import "./Select.scss";
import SelectReact from "react-select";

function Select({ options, vals, className }) {
  return (
    <SelectReact
      options={options}
      onChange={(e) => vals[1](e)}
      value={vals[0]}
      classNamePrefix="Select"
      className={className}
    />
  );
}

export default Select;
