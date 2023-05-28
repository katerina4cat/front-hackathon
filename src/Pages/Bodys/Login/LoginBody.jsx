import React, { useState } from "react";
import cl from "./LoginBody.module.scss";
import BannerRigth from "../../../Elements/BannerRigth/BannerRigth";
import Input from "../../../Elements/Input/Input";
import Button from "../../../Elements/Button/Button";
import UserDataBody from "../UserData/UserDataBody";

function LoginBody({ setPage, userManager, sendNotify }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorInfo, setErrorInfo] = useState(undefined);

  const authEvent = async () => {
    if (!Email & !Password) {
      setErrorInfo("Вы не указали логин и пароль!");
      return;
    } else if (!Email) {
      setErrorInfo("Вы не указали логин!");
      return;
    } else if (!Password) {
      setErrorInfo("Вы не указали пароль!");
      return;
    }
    try {
      const res = await userManager.auth(Email, Password);
      if (res.status == 200) {
        setPage(
          <UserDataBody
            setPage={setPage}
            userManager={userManager}
            sendNotify={sendNotify}
          />
        );
      } else setErrorInfo(res.data.detail);
    } catch {
      setErrorInfo("Произошла ошибка связи с сервером!");
    }
  };
  const restorePassword = () => {
    alert("Restore password not implemented");
  };

  return (
    <div className={cl.LoginBody}>
      <div className={cl.LeftBlock}>
        <div className={cl.UserFields}>
          <div className={cl.Title}>Вход</div>
          <div className={cl.FieldTitle}>Логин</div>
          <Input
            placeholder="Почта"
            className={cl.Input}
            vals={[Email, setEmail]}
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
