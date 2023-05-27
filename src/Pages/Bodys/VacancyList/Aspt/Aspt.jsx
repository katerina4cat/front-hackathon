import React from "react";
import cl from "./Aspt.module.scss";
import { ReactComponent as FileIcon } from "../../../../Assets/Icons/file.svg";

const Aspt = ({ AsptInfo }) => {
  return (
    <div className={cl.Aspt}>
      <div>
        ФИО, возраст: {AsptInfo.name} {AsptInfo.surname} {AsptInfo.lastname},{" "}
        {AsptInfo.age}
      </div>
      <div>Гражданство: {AsptInfo.from}</div>
      <div>Образование: {AsptInfo.educate}</div>
      <div>Опыт работы: {AsptInfo.exp}</div>
      <div>Резюме:</div>
      <FileIcon
        className={cl.FileIcon}
        onClick={() => window.open(AsptInfo.urlResume)}
      />
    </div>
  );
};

export default Aspt;
