import React, { useState } from "react";
import cl from "./StagesRegister.module.scss";
import BubleTitle from "../../../Elements/BubleTitle/BubleTitle";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import Select from "../../../Elements/Select/Select";
import EditInput from "../../../Elements/Input/EditInput";
import Button from "../../../Elements/Button/Button";
import ListVacancy from "../ListVacancy/ListVacancy";

function StagesRegister({ setPage }) {
  const Stages = [
    { value: 1, Title: "Анкета" },
    { value: 2, Title: "Карьерная школа" },
    { value: 3, Title: "Тестирование" },
    { value: 4, Title: "Кейс чемпионат" },
    { value: 5, Title: "Марафон работадателей" },
  ];

  const [Froms, setFroms] = useState([
    { value: 0, label: "Гражданин РФ" },
    { value: 1, label: "Гражданин РФ2" },
    { value: 2, label: "Гражданин РФ1" },
  ]);
  const From = useState(Froms[0]);
  const [Exps, setExps] = useState([
    { value: 0, label: "Не указан" },
    { value: 1, label: "Минимальный" },
    { value: 2, label: "Средний" },
    { value: 3, label: "Максимальный" },
  ]);
  const Exp = useState(Exps[0]);
  const [Educates, setEducates] = useState([
    { value: 0, label: "КТ МТУСИ" },
    { value: 1, label: "КТ МТУСИ1" },
    { value: 2, label: "КТ МТУСИ2" },
    { value: 3, label: "КТ МТУСИ3" },
  ]);
  const Educate = useState(Educates[0]);
  const [currStage, setcurrStage] = useState(Stages[4]);

  return (
    <div className={cl.StagesRegister}>
      <div className={cl.BubleStageField}>
        {Stages.map((stage) => (
          <BubleTitle
            BubleText={stage.value}
            Title={stage.Title}
            Selected={stage.value === currStage.value}
          />
        ))}
      </div>
      <div className={cl.FieldData}>
        <div className={cl.Title}>{currStage.Title}</div>
        {currStage?.value === 1 ? (
          <div className={cl.FieldData}>
            <div className={cl.FieldTitle}>Гражданство</div>
            <Select vals={From} options={Froms} className={cl.Select} />
            <div className={cl.FieldTitle}>Образование</div>
            <Select className={cl.Select} vals={Educate} options={Educates} />
            <div className={cl.FieldTitle}>Опыт работы</div>
            <Select vals={Exp} options={Exps} className={cl.Select} />
          </div>
        ) : undefined}
        {currStage?.value === 2 ? (
          <div className={cl.FieldData}>
            <div className={cl.FieldTitle}>
              Пройди подготовкд к стажировке в<br />
              карьерной школе Правительства Москвы
            </div>
            <Button className={cl.Button}>Начать</Button>
          </div>
        ) : undefined}
        {currStage?.value === 3 ? (
          <div className={cl.FieldData}>
            <div className={cl.FieldTitle}>
              Пройди несколько тестов перед
              <br />
              началом стажировки
            </div>
            <Button className={cl.Button}>Пройти</Button>
          </div>
        ) : undefined}
        {currStage?.value === 5 ? (
          <div className={cl.FieldData}>
            <div className={cl.FieldTitle}>
              Откликнись на доступные стажировки
              <br /> по твоим предпочтениям.
            </div>
            <Button
              className={cl.Button}
              onClick={() => setPage(<ListVacancy setPage={setPage} />)}
            >
              Начать
            </Button>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default StagesRegister;
