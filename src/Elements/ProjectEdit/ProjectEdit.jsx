import React, { useState } from "react";
import cl from "./ProjectEdit.module.scss";
import DateInformer from "../DateInformer/DateInformer";
import EditInput from "../Input/EditInput";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

function ProjectEdit({ Data, setData, className, deleting }) {
  const Name = [Data.title, (v) => setData({ ...Data, title: v })];
  const Class = [Data.class, (v) => setData({ ...Data, class: v })];
  const Result = [Data.result, (v) => setData({ ...Data, result: v })];
  const Date = [Data.date, (v) => setData({ ...Data, date: v })];
  return (
    <div className={[cl.ProjectEdit, className].join(" ")}>
      <EditInput
        placeholder="Навзвание комп."
        className={cl.Input}
        vals={Name}
      />
      <EditInput placeholder="Должность" className={cl.Input} vals={Class} />
      <EditInput placeholder="Описание" className={cl.Input} vals={Result} />
      <div className={cl.InfoDate}>Дата окончания:</div>
      <DateInformer vals={Date} className={cl.DateInformer} />
      <CrossIcon className={cl.DeletingButton} onClick={deleting} />
    </div>
  );
}

export default ProjectEdit;
