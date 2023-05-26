import React from "react";
import cl from "./ImageChose.module.scss";
import { ReactComponent as PenIcon } from "../../Assets/Icons/pen.svg";

function ImageChose({ src, className }) {
  return (
    <div
      className={[cl.ImageChose, className].join(" ")}
      onClick={() => src[1](prompt())}
    >
      <img
        className={cl.Image}
        src={
          src[0] ||
          "https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
        }
      ></img>
      <div className={cl.TitleBtn}>
        <div>Изменить</div>
        <PenIcon className={cl.TitleIcon} />
      </div>
    </div>
  );
}

export default ImageChose;
