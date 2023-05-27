import React from "react";
import cl from "./Switch.module.scss";

const Switch = (props) => {
  return (
    <div className={[props.className].join(" ")}>
      <input
        type="checkbox"
        id="switch"
        className={cl.SwitchInput}
        checked={props.vals[0]}
        onChange={(e) =>
          "vals" in props ? props.vals[1](e.target.checked) : undefined
        }
      />
      <label className={cl.SwitchLabel} for="switch">
        Toggle
      </label>
    </div>
  );
};

export default Switch;
