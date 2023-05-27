import React, { useState } from "react";
import cl from "./VacancyList.module.scss";
import RadioButton from "../../../Elements/RadioButton/RadioButton";
import Aspt from "./Aspt/Aspt";
import HidenElement from "../../../Elements/HidenElement/HidenElement";

const VacancyList = () => {
  const Aspts = [
    {
      name: "Екатерина",
      surname: "Корай",
      lastname: "-",
      age: 17,
      from: "Гражданин РФ",
      educate: "КТ МТУСИ",
      exp: "Средний",
      urlResume: "https://google.com",
    },
    {
      name: "Екатерина2",
      surname: "Корай2.0",
      lastname: "-",
      age: 25,
      from: "Казахстан",
      educate: "МТУСИ",
      exp: "Средний",
      urlResume: "https://google.com",
    },
  ];

  const Show = useState(false);
  const radio = useState("all");

  return (
    <div className={cl.VacancyList}>
      <div className={cl.Title} style={{ marginLeft: "0.75em" }}>
        Откилики на стажировку
      </div>
      <HidenElement Title={"Название стажировки"} show={Show}>
        <div className={cl.FieldTitle}>Отклики:</div>
        <div className={cl.SelectType}>
          <RadioButton
            name="list"
            value="all"
            vals={radio}
            className={cl.Radio}
          >
            Все
          </RadioButton>
          <RadioButton
            name="list"
            value="rec"
            vals={radio}
            className={cl.Radio}
          >
            Рекомендованные
          </RadioButton>
        </div>
        {Aspts.map((asptInfo) => (
          <Aspt AsptInfo={asptInfo} />
        ))}
      </HidenElement>
    </div>
  );
};

export default VacancyList;
