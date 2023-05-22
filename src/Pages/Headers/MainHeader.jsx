import React from "react";
import cl from "./MainHeader.module.scss";
import { ReactComponent as BurgerIcon } from "../../Assets/Icons/burgerDot.svg";
import { ReactComponent as BellIcon } from "../../Assets/Icons/bell.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/search.svg";

function MainHeader({ setBurger, setNotify, setSearch }) {
  const buttonsLine = [
    { title: "Главная" },
    { title: "События" },
    { title: "Новости" },
    { title: "Стажировки" },
  ];
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
          <div className={cl.AuthButton}>Войти</div>
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
          <div className={cl.ButtonsInline}>
            {buttonsLine.map((buttonLine) => (
              <div className={cl.ButtonLine}>{buttonLine.title}</div>
            ))}
          </div>
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
