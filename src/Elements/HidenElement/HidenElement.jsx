import React from "react";
import cl from "./HidenElement.module.scss";

const HidenElement = (props) => {
  return (
    <div className={cl.HidenElement} {...props}>
      <div className={cl.Title} onClick={() => props.show[1]((prev) => !prev)}>
        {props.show[0] ? "-" : "v"}
        {props.Title}
      </div>
      <div
        className={[
          cl.Content,
          props.show[0] ? undefined : cl.HideContent,
        ].join(" ")}
      >
        {props.children}
      </div>
    </div>
  );
};

export default HidenElement;
