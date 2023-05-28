import React, { useCallback, useEffect, useState } from "react";
import cl from "./RegisterBody.module.scss";
import Input from "../../../Elements/Input/Input";
import Button from "../../../Elements/Button/Button";
import BannerRigth from "../../../Elements/BannerRigth/BannerRigth";
import { ErrorNotify } from "../../../Elements/Notify/Notify";

function RegisterBody({ setPage, userManager, sendNotify }) {
  const [Resend, setResend] = useState(0);
  const [Sended, setSended] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [RepPassword, setRepPassword] = useState("");

  useEffect(() => {
    if (Resend > 0) setTimeout(() => setResend((prev) => prev - 1), 1000);
  }, [Resend]);

  const sendEvent = async () => {
    if (Password !== RepPassword) return false;
    if (!/^.+@.+\.\w+$/.test(Email)) return false;
    if (Resend > 0) return false;
    const res = await userManager.sendRequestRegister(
      Email,
      Password,
      RepPassword
    );
    if (!res) {
      setResend(0);
      setSended(false);
      sendNotify(
        <ErrorNotify
          title={"Ошибка API."}
          body={"Не удалось отправтиь запрос!"}
        />
      );
      return;
    }
    if (res.status === 400 && "password" in res.data) {
      setResend(0);
      setSended(false);
      sendNotify(
        <ErrorNotify title={"Ошибка"} body={"Неподходящий пароль!"} />
      );
      return;
    }
    if (res.status === 400 && "email" in res.data) {
      setResend(0);
      setSended(false);
      sendNotify(
        <ErrorNotify
          title={"Ошибка"}
          body={"Данная почта уже зарегистрирована!"}
        />
      );
      return;
    }
    if (res.status === 500) {
      setResend(0);
      setSended(false);
      sendNotify(<ErrorNotify title={"Ошибка"} body={"Ошибка сервера!"} />);
      return;
    }
    setResend(45);
    setSended(true);
  };

  return (
    <div className={cl.RegisterBody}>
      <div className={cl.UserFields}>
        <div className={cl.Title}>Регистрация пользователя</div>
        <div className={cl.FieldTitle}>Почта</div>
        <Input
          placeholder="Введите email"
          className={cl.Input}
          vals={[Email, setEmail]}
        />
        <div className={cl.AlertInfo}>
          На вашу почту будет отправлено письмо для подтверждения.
          <br />
          Если письмо не пришло - проверьте вкладку спама.
        </div>
        <div
          className={cl.ResendTimeout}
          style={{ display: Resend > 0 ? "block" : "none" }}
        >
          Повторная отправка доступна через: {Resend}
        </div>
        <div className={cl.FieldTitle}>Пароль</div>
        <Input
          placeholder="Придумайте пароль"
          type="password"
          className={cl.InputPass}
          vals={[Password, setPassword]}
        />
        <Input
          placeholder="Повторите пароль"
          type="password"
          pattern={Password}
          vals={[RepPassword, setRepPassword]}
          className={cl.InputPass}
        />
        <Button onClick={sendEvent} style={{ marginBottom: "2em" }}>
          Регистрация
        </Button>
      </div>
      <BannerRigth />
    </div>
  );
}

export default RegisterBody;
