import React, { useState } from "react";
import cl from "./ProjectEdit.module.scss";
import DateInformer from "../DateInformer/DateInformer";
import EditInput from "../Input/EditInput";
import { formatDate } from "../../common/FormatDate";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

function ProjectEdit({ Data, className, deleting }) {
  const Name = useState(Data[0] || "");
  const Class = useState(Data[1] || "");
  const Result = useState(Data[2] || "");
  const [Date, setDate] = useState(formatDate(Data[3]) || "07.02.2005");
  return (
    <div className={[cl.ProjectEdit, className].join(" ")}>
      <EditInput placeholder="Навзвание" className={cl.Input} vals={Name} />
      <EditInput placeholder="Роль" className={cl.Input} vals={Class} />
      <EditInput placeholder="Итог" className={cl.Input} vals={Result} />
      <div className={cl.InfoDate}>Дата проведения:</div>
      <DateInformer Date={Date} className={cl.DateInformer} />
      <CrossIcon className={cl.DeletingButton} onClick={deleting} />
    </div>
  );
}

export default ProjectEdit;
