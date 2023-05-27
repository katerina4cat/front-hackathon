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
      <div className={cl.Content}>{childrens?.map((x) => x)}</div>
    </div>
  );
}

export default SideMenu;
