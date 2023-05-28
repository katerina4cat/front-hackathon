import React from "react";
import LoginBody from "../../Bodys/Login/LoginBody";

function ToLogin({ setPage, userManager }) {
  return (
    <div
      onClick={() =>
        setPage(<LoginBody setPage={setPage} userManager={userManager} />)
      }
    >
      Вход
    </div>
  );
}

export default ToLogin;
