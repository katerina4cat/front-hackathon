import React, { useState } from "react";
import cl from "./VacancyCreate.module.scss";
import EditInput from "../../../Elements/Input/EditInput";
import ImageChose from "../../../Elements/ImageChose/ImageChose";
import Select from "../../../Elements/Select/Select";
import Button from "../../../Elements/Button/Button";

function VacancyCreate(props) {
  const imageAdd = "";
  const DirectionOptions = useState([
    { value: 0, label: "Направление" },
    { value: 1, label: "Специализация" },
  ]);
  const SpecializationOptions = useState([
    { value: 0, label: "Направлsdение" },
    { value: 1, label: "Специаsлизация" },
  ]);
  const Name = useState("");
  const Salary = useState("");
  const Direction = useState(DirectionOptions[0][0]);
  const Specialization = useState(SpecializationOptions[0][1]);

  const City = useState("");
  const Area = useState("");
  const Street = useState("");
  const House = useState("");
  const BuildsHouse = useState("");
  const Phone = useState("");
  const Email = useState("");
  const PostCode = useState("");

  const Description = useState("");
  const Requirements = useState("");

  const ImagesUrl = useState([
    {
      id: 0,
      url: "https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg",
    },
  ]);

  return (
    <div className={cl.UserDataBody}>
      <div className={cl.UserFields}>
        <div className={cl.AccountInfo}>
          <div style={{ width: "35vw" }}>
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
            <Select
              options={DirectionOptions[0]}
              vals={Direction}
              className={cl.Select}
            />
            <Select
              options={SpecializationOptions[0]}
              vals={Specialization}
              className={cl.Select}
            />
          </div>
          <div className={cl.PhotoList}>
            {ImagesUrl[0].map((imageUrl) =>
              imageUrl ? (
                <ImageChose
                  className={cl.ImageChose}
                  src={[
                    imageUrl.url,
                    (url) =>
                      ImagesUrl[1](
                        ImagesUrl[0].map((imgEdit) => {
                          if (imgEdit.id === imageUrl.id) {
                            imgEdit.url = url;
                          }
                          return imgEdit;
                        })
                      ),
                  ]}
                />
              ) : undefined
            )}
            <ImageChose
              className={`${cl.ImageChose} ${cl.ImageAdd}`}
              add={true}
              addClick={(url) =>
                ImagesUrl[1]([
                  ...ImagesUrl[0],
                  {
                    id: ImagesUrl[0][ImagesUrl[0].length - 1].id + 1,
                    url: url,
                  },
                ])
              }
            />
          </div>
        </div>
        <div className={cl.Title}>Контакты:</div>
        <div className={cl.InlineInputs}>
          <EditInput
            placeholder="Адм. округ"
            vals={City}
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
        <div className={cl.InfoFields}>
          <div className={`${cl.Title} ${cl.TitleInfo}`}>Информация:</div>
          <div className={cl.TextAreas}>
            <textarea
              placeholder="Описание"
              value={Description[0]}
              onChange={(e) => Description[1](e.target.value)}
            />
            <textarea
              placeholder="Требования"
              value={Requirements[0]}
              onChange={(e) => Requirements[1](e.target.value)}
            />
          </div>
          <Button className={cl.Button}>Добавить вакансию</Button>
        </div>
      </div>
    </div>
  );
}

export default VacancyCreate;
