import React from "react";
import cl from "./Input.module.scss";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

function Input(props) {
  return (
    <div className={cl.Input}>
      <input {...props} className={cl.InputText} />
      <CrossIcon className={cl.CrossIcon} />
    </div>
  );
}

export default Input;
