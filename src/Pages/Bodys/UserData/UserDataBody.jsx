import React, { useState } from "react";
import cl from "./UserDataBody.module.scss";
import EditInput from "../../../Elements/Input/EditInput";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import ProjectEdit from "../../../Elements/ProjectEdit/ProjectEdit";
import ImageChose from "../../../Elements/ImageChose/ImageChose";
import { ReactComponent as PlusIcon } from "../../../Assets/Icons/plus.svg";

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

  const ImageUrl = useState(
    "https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
  );

  const Projects = useState([
    {
      title: "Хакатон",
      class: "Фронт",
      result: "2",
      date: new Date(),
      id: Date.now(),
    },
  ]);

  const selection = ["Образование", "Стажировка"];

  return (
    <div className={cl.UserDataBody}>
      <div className={cl.UserFields}>
        <div className={cl.AccountInfo}>
          <div>
            <div className={cl.Title}>Личная информация:</div>
            <EditInput placeholder="Имя" vals={Name} className={cl.Input} />
            <EditInput
              placeholder="Фамилия"
              vals={SurName}
              className={cl.Input}
            />
            <EditInput
              placeholder="Отчество"
              vals={LastName}
              className={cl.Input}
            />
            <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
              Дата регистрации:
            </div>
            <DateInformer disable={true} />
            <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
              Год рождения:
            </div>
            <DateInformer />
          </div>
          <ImageChose className={cl.ImageChose} src={ImageUrl} />
        </div>
        <div className={cl.Title}>Адресная информация:</div>
        <div className={cl.InlineInputs}>
          <EditInput
            placeholder="Адм. округ"
            vals={Country}
            className={cl.Input}
          />
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
        <div className={cl.ProjectVisible}>
          <div className={cl.ProjectList}>
            {Projects[0].map((Project) => {
              if (!Project) return;
              return (
                <ProjectEdit
                  key={Project.id}
                  Data={Project}
                  setData={(v) =>
                    Projects[1]((prev) =>
                      prev.map((x) => (x?.id === Project.id ? v : x))
                    )
                  }
                  className={cl.ProjectEdit}
                  deleting={() => {
                    Projects[1]((prev) =>
                      prev.filter((x) => x?.id !== Project.id)
                    );
                  }}
                />
              );
            })}
            <div
              style={{
                position: "relative",
                alignSelf: "stretch",
                width: "3em",
              }}
            >
              <PlusIcon
                className={cl.PlusEdit}
                onClick={() =>
                  Projects[1]([
                    ...Projects[0],
                    {
                      title: "",
                      class: "",
                      result: "",
                      date: new Date(),
                      id: Date.now(),
                    },
                  ])
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDataBody;
