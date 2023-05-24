import React, { useState } from "react";
import MainHeader from "../Headers/MainHeader";
import RegisterBody from "../Bodys/Register/RegisterBody";
import MainFooter from "../Footers/MainFooter";

function Register() {
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
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
