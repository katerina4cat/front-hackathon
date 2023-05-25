import React from "react";
import cl from "./DateInformer.module.scss";
import { ReactComponent as CalendarIcon } from "../../Assets/Icons/calendar.svg";

function DateInformer({ Date, className }) {
  return (
    <div className={[cl.DateInformer, className].join(" ")}>
      {Date || "01.12.1999"}
      <CalendarIcon className={cl.Calendar} />
    </div>
  );
}

export default DateInformer;
