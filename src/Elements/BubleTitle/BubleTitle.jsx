import React from "react";
import cl from "./BubleTitle.module.scss";

function BubleTitle({ BubleText, Title, Selected }) {
  return (
    <div className={cl.BubleTitle}>
      <div className={cl.Buble}>
        <div className={cl.BubleText}>{BubleText}</div>
      </div>
      <div className={cl.Title}>
        <div
          className={[
            cl.TitleMidle,
            Selected ? cl.TitleSelected : undefined,
          ].join(" ")}
        >
          {Title}
        </div>
      </div>
    </div>
  );
}

export default BubleTitle;
