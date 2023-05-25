import React from "react";
import RegisterBody from "../../Bodys/Register/RegisterBody";

function ToRegister({ setPage }) {
  return (
    <div onClick={() => setPage(<RegisterBody setPage={setPage} />)}>
      Регистрация
    </div>
  );
}

export default ToRegister;
