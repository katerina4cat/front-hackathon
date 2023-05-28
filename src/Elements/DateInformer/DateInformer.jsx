import React, { useState } from "react";
import cl from "./DateInformer.module.scss";
import { ReactComponent as CalendarIcon } from "../../Assets/Icons/calendar.svg";
import { formatDate } from "../../common/FormatDate";

function DateInformer({ date, className, disable = false }) {
  function getMonthDates(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);

    const dates = [];
    let week = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const prevMonthStartDay = firstDay.getDay();
    for (let i = prevMonthStartDay - 1; i >= 0; i--) {
      week.push(-(prevMonthLastDay - i));
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      week.push(day);

      if (week.length === 7) {
        dates.push(week);
        week = [];
      }
    }

    let nextMonthDay = 1;
    while (week.length < 7 && week.length !== 0) {
      week.push(-nextMonthDay);
      nextMonthDay++;
    }

    dates.push(week);

    return dates;
  }
  function offsetDate(monthOffset = 0, yearOffset = 0) {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + monthOffset);
      if (yearOffset !== 0) {
        newDate.setFullYear(newDate.getFullYear() + yearOffset);
      }
      return newDate;
    });
  }
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [ChoseDate, setChoseDate] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(date || new Date());
  return (
    <div
      className={[cl.DateInformer, className].join(" ")}
      onClick={() => setChoseDate((prev) => !prev)}
    >
      {formatDate(SelectedDate)}
      <CalendarIcon className={cl.Calendar} />
      {disable ? undefined : (
        <div
          onClick={(e) => e.stopPropagation()}
          className={cl.ChoseDateBox}
          style={{ display: ChoseDate ? "flex" : "none" }}
        >
          <div style={{ display: "flex" }}>
            <div className={cl.MounthTitle}>
              <div className={cl.MonthButton} onClick={() => offsetDate(-1)}>
                {"<"}
              </div>
              {months[SelectedDate.getMonth()]}
              <div className={cl.MonthButton} onClick={() => offsetDate(1)}>
                {">"}
              </div>
            </div>
            <div className={cl.MounthTitle}>
              <div className={cl.MonthButton} onClick={() => offsetDate(0, -1)}>
                {"<"}
              </div>
              {SelectedDate.getFullYear()}
              <div className={cl.MonthButton} onClick={() => offsetDate(0, 1)}>
                {">"}
              </div>
            </div>
          </div>

          <div className={cl.DayPicker}>
            {daysOfWeek.map((x) => (
              <div className={cl.ElementWeek}>{x}</div>
            ))}
          </div>
          {getMonthDates(SelectedDate).map((Line) => (
            <div className={cl.DayPicker}>
              {Line.map((x, i) => (
                <div
                  className={[
                    cl.Element,
                    x < 0 ? cl.ElementOut : undefined,
                  ].join(" ")}
                  onClick={() => {
                    setSelectedDate(() => {
                      SelectedDate.setDate(1);
                      if (x < 0)
                        SelectedDate.setMonth(
                          SelectedDate.getMonth() + (i > 2 ? 1 : -1)
                        );
                      SelectedDate.setDate(Math.abs(x));
                      return SelectedDate;
                    });
                    setChoseDate(false);
                  }}
                >
                  {Math.abs(x)}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DateInformer;
