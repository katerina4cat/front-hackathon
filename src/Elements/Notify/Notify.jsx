import React from "react";
import cl from "./Notify.module.scss";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

export const Notify = ({ vals }) => {
  return (
    <div className={cl.Notify}>
      {vals[0].map((notify) => (
        <div className={cl.NotifyElement} id={notify.id}>
          {notify.chidlren}
        </div>
      ))}
    </div>
  );
};

export const ErrorNotify = ({ title, body }) => {
  return (
    <div className={cl.NotifyError}>
      <CrossIcon className={cl.Icon} />
      <div className={cl.Inline}>
        <div className={cl.Title}>{title}</div>
        <div className={cl.Body}>{body}</div>
      </div>
    </div>
  );
};
