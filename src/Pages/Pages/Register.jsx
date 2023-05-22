import React, { useState } from "react";
import cl from "./Register.module.scss";
import MainHeader from "../Headers/MainHeader";
import RegisterBody from "../Bodys/RegisterBody";
import MainFooter from "../Footers/MainFooter";

function Register() {
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className={cl.Register}>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
      />
      <RegisterBody />
      <MainFooter />
    </div>
  );
}

export default Register;
