import React from "react";
import cl from "./Input.module.scss";
import { ReactComponent as PenIcon } from "../../Assets/Icons/pen.svg";

function EditInput(props) {
  const [value, setValue] = props.vals || ["", () => {}];
  return (
    <div className={[cl.Input, props.className].join(" ")}>
      <input
        {...props}
        className={cl.InputText}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <PenIcon className={cl.CrossIcon} />
    </div>
  );
}

export default EditInput;
