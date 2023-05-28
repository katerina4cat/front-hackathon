import React from "react";
import RegisterBody from "../../Bodys/Register/RegisterBody";

function ToRegister({ setPage, userManager, sendNotify }) {
  return (
    <div
      onClick={() =>
        setPage(
          <RegisterBody
            setPage={setPage}
            userManager={userManager}
            sendNotify={sendNotify}
          />
        )
      }
    >
      Регистрация
    </div>
  );
}

export default ToRegister;
