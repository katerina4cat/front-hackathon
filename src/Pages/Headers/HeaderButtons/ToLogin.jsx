import React from "react";
import LoginBody from "../../Bodys/Login/LoginBody";

function ToLogin({ setPage }) {
  return (
    <div onClick={() => setPage(<LoginBody setPage={setPage} />)}>Вход</div>
  );
}

export default ToLogin;
