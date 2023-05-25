import React from "react";
import cl from "./MainFooter.module.scss";

function MainFooter() {
  const buttons = [
    [{ title: "Новости" }, { title: "Вакансия" }, { title: "Контакты" }],
    [{ title: "Главная" }, { title: "Стажировка" }, { title: "Помощь" }],
    [{ title: "Мероприятия" }, { title: "Карьерная школа" }],
  ];
  return (
    <div className={cl.MainFooter}>
      <div className={cl.Buttons}>
        <div className={cl.Table}>
          {buttons.map((row) => (
            <div className={cl.Row}>
              {row.map((element) => (
                <div className={cl.Cell}>{element.title}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={cl.Info}>
        <img
          className={cl.Embleme}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Coat_of_Arms_of_Moscow.svg/300px-Coat_of_Arms_of_Moscow.svg.png"
        />
        <div className={cl.Contacts}>
          8(801)555-35-35
          <br />
          8(801)555-35-35
        </div>
        <div className={cl.Contacts}>katerina4cat@gmail.com</div>
      </div>
    </div>
  );
}

export default MainFooter;
