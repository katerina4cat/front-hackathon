import React from "react";
import LoginBody from "../../Bodys/Login/LoginBody";

function ToLogin({ setPage, userManager, sendNotify }) {
  return (
    <div
      onClick={() =>
        setPage(
          <LoginBody
            setPage={setPage}
            userManager={userManager}
            sendNotify={sendNotify}
          />
        )
      }
    >
      Вход
    </div>
  );
}

export default ToLogin;
