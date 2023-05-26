import React, { useState } from "react";
import cl from "./VacancyCreate.module.scss";
import EditInput from "../../../Elements/Input/EditInput";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import ProjectEdit from "../../../Elements/ProjectEdit/ProjectEdit";
import ImageChose from "../../../Elements/ImageChose/ImageChose";
import { ReactComponent as PlusIcon } from "../../../Assets/Icons/plus.svg";
import Select from "../../../Elements/Select/Select";

function VacancyCreate(props) {
  const Name = useState("");
  const Salary = useState("");
  const Direction = useState("");
  const Specialization = useState("");

  const Area = useState("");
  const Street = useState("");
  const House = useState("");
  const BuildsHouse = useState("");
  const Phone = useState("");
  const Email = useState("");
  const PostCode = useState("");

  const ImageUrl = useState(
    "https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
  );

  const Projects = useState([
    ["Хакатон", "Фронт", "1 место", new Date(2023, 5, 30), Date.now()],
  ]);

  const selection = ["Образование", "Стажировка"];

  return (
    <div className={cl.UserDataBody}>
      <div className={cl.UserFields}>
        <div className={cl.AccountInfo}>
          <div>
            <div className={cl.Title}>Информация:</div>
            <EditInput
              placeholder="Название"
              vals={Name}
              className={cl.Input}
            />
            <EditInput
              placeholder="Заработная плата"
              vals={Salary}
              className={cl.Input}
            />
            <Select values={["Раз", "Два", "nhb"]} />
            <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
              Дата регистрации:
            </div>
            <DateInformer />
          </div>
          <ImageChose className={cl.ImageChose} src={ImageUrl} />
        </div>
        <div className={cl.Title}>Адресная информация:</div>
        <div className={cl.InlineInputs}>
          <EditInput placeholder="Город" className={cl.Input} />
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
        <div className={cl.Title}>Проекты:</div>
        <div className={cl.ProjectList}>
          {Projects[0].map((Project) => (
            <ProjectEdit
              Data={Project}
              className={cl.ProjectEdit}
              deleting={() =>
                Projects[1](Projects[0].filter((x) => x[4] != Project[4]))
              }
            />
          ))}
          <div
            style={{ position: "relative", alignSelf: "stretch", width: "3em" }}
          >
            <PlusIcon
              className={cl.PlusEdit}
              onClick={() =>
                Projects[1]([
                  ...Projects[0],
                  [undefined, undefined, undefined, undefined, Date.now()],
                ])
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyCreate;
