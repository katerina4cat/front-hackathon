import React from "react";
import cl from "./AccountIcon.module.scss";
import { ReactComponent as ProfleIcon } from "../../Assets/Icons/account.svg";

function AccountIcon() {
  return <ProfleIcon className={cl.ImageIcon} />;
}

export default AccountIcon;
