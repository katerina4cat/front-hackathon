import React, { useState } from "react";
import MainHeader from "../Headers/MainHeader";
import MainFooter from "../Footers/MainFooter";
import AccountIcon from "../../Elements/AccountIcon/AccountIcon";
import UserDataBody from "../Bodys/UserData/UserDataBody";

function UserData(props) {
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
        setPage={props.setPage}
      >
        <AccountIcon />
      </MainHeader>
      <UserDataBody />
      <MainFooter />
    </div>
  );
}

export default UserData;
