import React, { useState } from "react";
import cl from "./StagesRegister.module.scss";
import BubleTitle from "../../../Elements/BubleTitle/BubleTitle";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import Select from "../../../Elements/Select/Select";
import EditInput from "../../../Elements/Input/EditInput";
import Button from "../../../Elements/Button/Button";
import ListVacancy from "../ListVacancy/ListVacancy";
import UserDataBody from "../UserData/UserDataBody";

function StagesRegister({ setPage, userManager, sendNotify }) {
  const Stages = [
    { value: 1, Title: "Анкета" },
    { value: 2, Title: "Карьерная школа" },
    { value: 3, Title: "Тестирование" },
    { value: 4, Title: "Кейс чемпионат" },
    { value: 5, Title: "Марафон работадателей" },
  ];

  const [currStage, setcurrStage] = useState(Stages[0]);

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
            <div className={cl.FieldTitle}>
              Заполни данные о себе для регистрации
            </div>
            <Button
              className={cl.Button}
              onClick={() =>
                setPage(
                  <UserDataBody
                    setPage={setPage}
                    userManager={userManager}
                    sendNotify={sendNotify}
                  />
                )
              }
            >
              Перейти к заполнению
            </Button>
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
