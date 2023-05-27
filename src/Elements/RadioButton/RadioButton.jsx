import React from "react";
import cl from "./RadioButton.module.scss";

const RadioButton = ({ name, value, children, vals, className }) => {
  return (
    <label className={cl.RadioButton}>
      <input
        type="radio"
        name={name}
        value={value}
        className={cl.Radio}
        checked={vals[0] === value}
        onChange={() => vals[1](value)}
      />
      <span className={[cl.Span, className].join(" ")}>{children}</span>
    </label>
  );
};

export default RadioButton;
