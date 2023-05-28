import React from "react";
import RegisterBody from "../../Bodys/Register/RegisterBody";

function ToRegister({ setPage, userManager }) {
  return (
    <div
      onClick={() =>
        setPage(<RegisterBody setPage={setPage} userManager={userManager} />)
      }
    >
      Регистрация
    </div>
  );
}

export default ToRegister;
