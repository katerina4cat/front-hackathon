import React, { useState } from "react";
import MainHeader from "../Headers/MainHeader";
import MainFooter from "../Footers/MainFooter";
import LoginBody from "../Bodys/Login/LoginBody";
import Register from "./Register";

function Login(props) {
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
        setPage={props.setPage}
      >
        <div
          onClick={() => props.setPage(<Register setPage={props.setPage} />)}
        >
          Регистрация
        </div>
      </MainHeader>
      <LoginBody />
      <MainFooter />
    </div>
  );
}

export default Login;
