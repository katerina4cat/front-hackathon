import React, { useState } from "react";
import cl from "./UserDataBody.module.scss";
import EditInput from "../../../Elements/Input/EditInput";
import DateInformer from "../../../Elements/DateInformer/DateInformer";
import ProjectEdit from "../../../Elements/ProjectEdit/ProjectEdit";
import ImageChose from "../../../Elements/ImageChose/ImageChose";
import { ReactComponent as PlusIcon } from "../../../Assets/Icons/plus.svg";
import Button from "../../../Elements/Button/Button";
import Switch from "../../../Elements/Switch/Switch";
import { formatApiDate } from "../../../common/FormatDate";
import { ErrorNotify } from "../../../Elements/Notify/Notify";
import StagesRegister from "../StagesRegister/StagesRegister";

function UserDataBody({ setPage, userManager, sendNotify }) {
  const Name = useState("");
  const SurName = useState("");
  const LastName = useState("");

  const From = useState("");
  const Educate = useState("");
  const Expi = useState("");

  const Country = useState("");
  const Area = useState("");
  const Street = useState("");
  const House = useState("");
  const BuildsHouse = useState("");
  const Phone = useState("");
  const Email = useState("");
  const PostCode = useState("");

  const birthDate = useState(new Date());

  const Sex = useState(false);

  const Projects = useState([
    {
      title: "",
      class: "",
      result: "",
      date: new Date(),
      id: Date.now(),
    },
  ]);

  const sendData = async () => {
    const res = await userManager.sendAnceteInfo(
      Name[0],
      SurName[0],
      LastName[0],
      Sex[0] ? "Ж" : "М",
      Country[0],
      Area[0],
      formatApiDate(birthDate),
      From[0],
      Phone[0],
      Educate[0],
      Projects.map((x) => ({
        companyName: x.title,
        position: x.class,
        endDate: x.date,
        description: x.result,
      }))
    );
    if (res.status === 201) {
      alert("Анкета успешно отправлена!");
      setPage(
        <StagesRegister
          setPage={setPage}
          userManager={userManager}
          sendNotify={sendNotify}
        />
      );
      return;
    }
    sendNotify(
      <ErrorNotify title={"Ошибка"} body={"Возможно заполнены не все поля"} />
    );
  };

  return (
    <div className={cl.UserDataBody}>
      <div className={cl.UserFields}>
        <div className={cl.AccountInfo}>
          <div>
            <div className={cl.Title} style={{ textAlign: "center" }}>
              Личная информация:
            </div>
            <div
              style={{
                display: "flex",
                width: "40vw",
                justifyContent: "space-between",
              }}
            >
              <div>
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
              </div>
              <div>
                <EditInput
                  placeholder="Гражданство"
                  vals={From}
                  className={cl.Input}
                />
                <EditInput
                  placeholder="Образование"
                  vals={Educate}
                  className={cl.Input}
                />
              </div>
            </div>
            <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
              Ваш пол:
            </div>
            <div
              style={{
                display: "flex",
                scale: "1.3",
                marginLeft: "4em",
              }}
            >
              <div className={cl.SexCenter}>Мужской</div>
              <Switch vals={Sex} />
              <div className={cl.SexCenter}>Женский</div>
            </div>
            <div className={cl.Title} style={{ marginBottom: "0.25em" }}>
              Год рождения:
            </div>
            <DateInformer vals={birthDate} />
          </div>
        </div>
        <div className={cl.Title}>Адресная информация:</div>
        <div className={cl.InlineInputs}>
          <EditInput
            placeholder="Адм. округ"
            vals={Country}
            className={cl.Input}
          />
          <EditInput placeholder="Район" vals={Area} className={cl.Input} />
        </div>
        <div className={cl.InlineContacts}>
          <EditInput placeholder="Телефон" vals={Phone} className={cl.Input} />
          <EditInput placeholder="Почта" vals={Email} className={cl.Input} />
        </div>
        <div className={cl.Title}>Опыт работы:</div>
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
        <Button className={cl.ButtonT} onClick={sendData}>
          Отправить анкету
        </Button>
      </div>
    </div>
  );
}

export default UserDataBody;
