import React from "react";
import cl from "./Input.module.scss";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

function Input(props) {
  const [value, setValue] = props.vals || ["", () => {}];
  return (
    <div className={[cl.Input, props.className].join(" ")}>
      <input
        {...props}
        className={cl.InputText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CrossIcon className={cl.CrossIcon} onClick={() => setValue("")} />
    </div>
  );
}

export default Input;
