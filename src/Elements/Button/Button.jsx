import React from "react";
import cl from "./Button.module.scss";

function Button(props) {
  return (
    <button {...props} className={[cl.Button, props.className].join(" ")}>
      <div className={cl.Content}>{props.children}</div>
    </button>
  );
}

export default Button;
