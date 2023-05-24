import React, { useState } from "react";
import cl from "./LoginBody.module.scss";
import BannerRigth from "../../../Elements/BannerRigth/BannerRigth";
import Input from "../../../Elements/Input/Input";
import Button from "../../../Elements/Button/Button";
import UserData from "../../Pages/UserData";

function LoginBody(props) {
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorInfo, setErrorInfo] = useState(undefined);

  const authEvent = () => {
    if (!Login & !Password) setErrorInfo("Вы не указали логин и пароль!");
    else if (!Login) setErrorInfo("Вы не указали логин!");
    else if (!Password) setErrorInfo("Вы не указали пароль!");
    else setErrorInfo(undefined);
    props.setPage(<UserData setPage={props.setPage} />);
    alert("Auth");
  };
  const restorePassword = () => {
    alert("restorePassword");
  };

  return (
    <div className={cl.LoginBody}>
      <div className={cl.LeftBlock}>
        <div className={cl.UserFields}>
          <div className={cl.Title}>Вход</div>
          <div className={cl.FieldTitle}>Логин</div>
          <Input
            placeholder="ФИО или почта"
            className={cl.Input}
            vals={[Login, setLogin]}
          />
          <div className={cl.FieldTitle}>Пароль</div>
          <Input
            placeholder="Пароль"
            className={cl.Input}
            type="password"
            vals={[Password, setPassword]}
          />
          <div className={cl.RememberPassword} onClick={restorePassword}>
            Не помню пароль
          </div>
          <Button className={cl.AuthButton} onClick={authEvent}>
            Войти
          </Button>
        </div>
        <div className={cl.InfoBrick} style={{ opacity: ErrorInfo ? 1 : 0 }}>
          <div className={cl.Content}>{ErrorInfo}</div>
        </div>
      </div>
      <BannerRigth />
    </div>
  );
}

export default LoginBody;
