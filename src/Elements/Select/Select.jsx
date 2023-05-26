import React from "react";
import cl from "./Select.module.scss";

function Select({ className, values }) {
  return (
    <select
      className={[cl.Select, className].join(" ")}
      onChange={(e) => console.log(e.target.value)}
    >
      {values.map((x) => (
        <option>{x}</option>
      ))}
    </select>
  );
}

export default Select;
