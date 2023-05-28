import React from "react";
import cl from "./MainHeader.module.scss";
import { ReactComponent as BurgerIcon } from "../../Assets/Icons/burgerDot.svg";
import { ReactComponent as BellIcon } from "../../Assets/Icons/bell.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/search.svg";
import ToRegister from "./HeaderButtons/ToRegister";
import ToUserData from "./HeaderButtons/ToUserData";
import ToLogin from "./HeaderButtons/ToLogin";
import StagesRegister from "../Bodys/StagesRegister/StagesRegister";
import UserDataBody from "../Bodys/UserData/UserDataBody";

function MainHeader({
  setBurger,
  setNotify,
  setSearch,
  setPage,
  currentPage,
  userManager,
}) {
  const buttonsLine = [
    {
      title: "Главная",
      func: () =>
        setPage(<StagesRegister setPage={setPage} userManager={userManager} />),
    },
    { title: "События" },
    { title: "Новости" },
    { title: "Стажировки" },
  ];
  const ButtonAuths = {
    RegisterBody: <ToLogin setPage={setPage} userManager={userManager} />,
    LoginBody: <ToRegister setPage={setPage} userManager={userManager} />,
  };
  return (
    <div className={cl.MainHeader}>
      <div className={cl.MoscowHeader}>
        <div className={cl.GlobalTitle}>
          <img
            className={cl.Embleme}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Coat_of_Arms_of_Moscow.svg/300px-Coat_of_Arms_of_Moscow.svg.png"
          />
          <div className={cl.Title}>Правительство Москвы</div>
        </div>
        <div className={cl.AuthSearch}>
          <div
            className={cl.SearchIcon}
            onClick={(e) => {
              e.stopPropagation();
              setSearch((prev) => !prev);
            }}
          >
            <SearchIcon className={cl.Search} />
          </div>
          <div className={cl.AuthButton}>
            {ButtonAuths[currentPage] ? (
              ButtonAuths[currentPage]
            ) : (
              <ToUserData
                onClick={() =>
                  setPage(
                    <UserDataBody setPage={setPage} userManager={userManager} />
                  )
                }
              />
            )}
          </div>
        </div>
      </div>

      <div className={cl.ButtonsHeader}>
        <div className={cl.ButtonsLineFrame}>
          <div
            className={cl.BurgerFrame}
            onClick={(e) => {
              e.stopPropagation();
              setBurger((prev) => !prev);
            }}
          >
            <BurgerIcon className={cl.Burger} />
          </div>
          {buttonsLine.map((buttonLine) => (
            <div className={cl.ButtonLine} onClick={buttonLine.func}>
              {buttonLine.title}
            </div>
          ))}
          <div
            className={cl.BellFrame}
            onClick={(e) => {
              e.stopPropagation();
              setNotify((prev) => !prev);
            }}
          >
            <BellIcon className={cl.Bell} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
