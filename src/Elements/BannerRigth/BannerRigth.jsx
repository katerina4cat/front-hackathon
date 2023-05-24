import React from "react";
import cl from "./BannerRigth.module.scss";

function BannerRigth(props) {
  return (
    <div className={cl.BannerRigth} {...props}>
      <div className={cl.TitleText}>
        TВОЙ ГОРОД
        <div className={cl.TitleBannerLine}></div> TВОЁ ДЕЛО
      </div>
    </div>
  );
}

export default BannerRigth;
