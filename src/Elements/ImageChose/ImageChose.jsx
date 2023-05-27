import React from "react";
import cl from "./ImageChose.module.scss";
import { ReactComponent as PenIcon } from "../../Assets/Icons/pen.svg";
import { ReactComponent as AddIcon } from "../../Assets/Icons/plus.svg";

function ImageChose({ src, className, add, addClick }) {
  return (
    <div
      className={[cl.ImageChose, className].join(" ")}
      onClick={() => {
        const url = prompt();
        if (!url) return;
        add ? addClick(url) : src[1](url);
      }}
    >
      <img className={cl.Image} src={src ? src[0] : undefined}></img>
      <div className={cl.TitleBtn}>
        <div>{add ? "Добавить" : "Изменить"}</div>
        {add ? (
          <AddIcon className={cl.TitleIcon} />
        ) : (
          <PenIcon className={cl.TitleIcon} />
        )}
      </div>
    </div>
  );
}

export default ImageChose;
