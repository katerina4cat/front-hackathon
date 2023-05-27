import React from "react";
import cl from "./SideMenu.module.scss";

function SideMenu({ enabled, setEnabled, childrens }) {
  return (
    <div
      className={[
        cl.UserSideMenu,
        enabled ? undefined : cl.UserSidemenuHide,
      ].join(" ")}
      onClick={(e) => {
        e.stopPropagation();
        setEnabled(false);
      }}
    >
      <div className={cl.Content}>
        {childrens?.map((x) => (
          <div className={cl.SimpleElement}>{x}</div>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
