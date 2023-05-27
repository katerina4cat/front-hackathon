import React from "react";
import AccountIcon from "../../../Elements/AccountIcon/AccountIcon";

function ToUserData({ onClick }) {
  return (
    <div onClick={onClick}>
      <AccountIcon />
    </div>
  );
}

export default ToUserData;
