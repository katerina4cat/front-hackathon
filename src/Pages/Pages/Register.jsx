import React, { useState } from "react";
import MainHeader from "../Headers/MainHeader";
import RegisterBody from "../Bodys/Register/RegisterBody";
import MainFooter from "../Footers/MainFooter";
import Login from "./Login";

function Register(props) {
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
        <div onClick={() => props.setPage(<Login setPage={props.setPage} />)}>
          Войти
        </div>
      </MainHeader>
      <RegisterBody />
      <MainFooter />
    </div>
  );
}

export default Register;
