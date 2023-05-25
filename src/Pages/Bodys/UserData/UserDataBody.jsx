import React, { useState } from "react";
import cl from "./UserDataBody.module.scss";
import EditInput from "../../../Elements/Input/EditInput";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import ProjectEdit from "../../../Elements/ProjectEdit/ProjectEdit";

function UserDataBody(props) {
  const Name = useState("");
  const SurName = useState("");
  const LastName = useState("");

  const Country = useState("");
  const Area = useState("");
  const Street = useState("");
  const House = useState("");
  const BuildsHouse = useState("");
  const Phone = useState("");
  const Email = useState("");
  const PostCode = useState("");

  const Projects = useState([
    ["Хакатон", "Фронт", "1 место", new Date(2023, 5, 30)],
  ]);

  const selection = ["Образование", "Стажировка"];

  return (
    <div className={cl.UserDataBody}>
      <div className={cl.UserFields}>
        <div className={cl.Title}>Личная информация:</div>
        <EditInput placeholder="Имя" vals={Name} className={cl.Input} />
        <EditInput placeholder="Фамилия" vals={SurName} className={cl.Input} />
        <EditInput
          placeholder="Отчество"
          vals={LastName}
          className={cl.Input}
        />
        <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
          Дата регистрации:
        </div>
        <DateInformer />
        <div className={cl.Title}>Адресная информация:</div>
        <div className={cl.InlineInputs}>
          <EditInput placeholder="Город" vals={Country} className={cl.Input} />
          <EditInput placeholder="Район" vals={Area} className={cl.Input} />
          <EditInput placeholder="Улица" vals={Street} className={cl.Input} />
          <EditInput placeholder="Дом" vals={House} className={cl.Input} />
          <EditInput
            placeholder="Строение"
            vals={BuildsHouse}
            className={cl.Input}
          />
        </div>
        <div className={cl.InlineContacts}>
          <EditInput placeholder="Телефон" vals={Phone} className={cl.Input} />
          <EditInput placeholder="Почта" vals={Email} className={cl.Input} />
          <EditInput
            placeholder="Посткод"
            vals={PostCode}
            className={cl.Input}
          />
        </div>
        <div className={cl.Title}>Прочее:</div>
        <select className={cl.Selection}>
          {selection.map((x) => (
            <option>{x}</option>
          ))}
        </select>
        <div className={cl.Title}>Проекты:</div>
        <div className={cl.ProjectList}>
          {Projects[0].map((Project) => (
            <ProjectEdit Data={Project} className={cl.ProjectEdit} />
          ))}
          <div
            style={{ position: "relative", alignSelf: "stretch", width: "3em" }}
          >
            <div
              className={cl.PlusEdit}
              onClick={() => Projects[1]([...Projects[0], []])}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDataBody;
