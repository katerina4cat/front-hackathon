import React, { useEffect, useState } from "react";
import cl from "./ListVacancy.module.scss";
import Search from "../../../Elements/Input/Search";
import Modal from "../../../Elements/Modal/Modal";
import Range from "../../../Elements/Range/Range";
import Switch from "../../../Elements/Switch/Switch";

const ListVacancy = ({ setPage }) => {
  const VacancyList = useState([
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      sended: true,
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      sended: true,
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
    {
      jobTitle: "Грузчик",
      specialization: "Сладкская",
      salary: 2345.67,
      companyName: "Ozon",
      adress: {
        city: "Москва",
        street: "Пушкина",
        house: "Колотушкина",
        building: "5",
      },
    },
    {
      jobTitle: "Кассир",
      specialization: "Ресторанный",
      salary: 5345.67,
      companyName: "Макдак",
      adress: {
        city: "Химки",
        street: "Пушкина",
        house: "Колотушкина",
      },
    },
  ]);

  const minSalary = VacancyList[0].reduce((prev, curr) =>
    prev.salary < curr.salary ? prev : curr
  ).salary;
  const maxSalary = VacancyList[0].reduce((prev, curr) =>
    prev.salary > curr.salary ? prev : curr
  ).salary;

  const adressString = (adr) =>
    `г.${adr?.city}, ул.${adr?.street}${adr?.house ? `, д.${adr?.house}` : ""}${
      adr?.building ? `, стр.${adr?.building}` : ""
    }`;

  const SearchText = useState("");
  const FilterModal = useState(false);
  const minSalaryVal = useState(minSalary);
  const maxSalaryVal = useState(maxSalary);

  const showSended = useState(true);

  const filter = (val) => {
    const adr = val.adress;
    const searched = SearchText[0].toLocaleLowerCase();
    return (
      (val.jobTitle.toLowerCase().includes(searched) ||
        adr.city.toLocaleLowerCase().includes(searched) ||
        adr.street.toLocaleLowerCase().includes(searched) ||
        val.specialization
          .toLocaleLowerCase()
          .toLocaleLowerCase()
          .includes(searched)) &&
      val.salary >= minSalaryVal[0] &&
      val.salary <= maxSalaryVal[0] &&
      (showSended[0] ? true : !val.sended)
    );
  };

  return (
    <div className={cl.ListVacancy}>
      <Modal vals={FilterModal} className={cl.Modal}>
        <div className={cl.Title}>Фильтры</div>
        <div className={cl.SalarySlider}>
          Зарплата:{" "}
          <Range
            min={minSalary}
            max={maxSalary}
            valsmin={minSalaryVal}
            valsmax={maxSalaryVal}
          />
        </div>
        <div className={cl.ShowRegistered}>
          Мои отклики: <Switch vals={showSended} className={cl.Switch} />
        </div>
      </Modal>
      <div className={cl.SearchBlock}>
        <div className={cl.Filter} onClick={() => FilterModal[1](true)}>
          Фильтры
        </div>
        <Search className={cl.Search} vals={SearchText} />
      </div>
      <div className={cl.Results}>
        {VacancyList[0].filter(filter).map((vacancyInfo) => (
          <div
            className={[
              cl.ResultBox,
              vacancyInfo.sended ? cl.ResultBoxSended : undefined,
            ].join(" ")}
          >
            <div className={cl.Title}>{vacancyInfo.jobTitle}</div>
            <div className={cl.Field}>
              Специализация: {vacancyInfo.specialization}
            </div>
            <div className={cl.Field}>Зарплата: {vacancyInfo.salary}₽</div>
            <div className={cl.Field}>Адресс:</div>
            <div className={cl.Field}>{adressString(vacancyInfo.adress)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVacancy;
