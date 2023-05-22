import React from "react";
import cl from "./RegisterBody.module.scss";
import Input from "../../Elements/Input/Input";

function RegisterBody() {
  return (
    <div className={cl.RegisterBody}>
      <div className={cl.TableRow}>
        <div className={cl.UserFields}>
          <div className={cl.Title}>Регистрация пользователя</div>
          <div className={cl.EmailTitle}>Почта</div>
          <Input />
        </div>
        <div className={cl.TitleBanner}>
          TВОЙ ГОРОД
          <br />
          -<br />
          TВОЁ ДЕЛО
        </div>
      </div>
    </div>
  );
}

export default RegisterBody;
