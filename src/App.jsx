import { useEffect, useRef, useState } from "react";
import style from "./App.module.scss";
import RegisterBody from "./Pages/Bodys/Register/RegisterBody";
import MainHeader from "./Pages/Headers/MainHeader";
import MainFooter from "./Pages/Footers/MainFooter";
import VacancyCreate from "./Pages/Bodys/VacancyCreate/VacancyCreate";
import SideMenu from "./Elements/SideMenu/SideMenu";
import StagesRegister from "./Pages/Bodys/StagesRegister/StagesRegister";
import LoginBody from "./Pages/Bodys/Login/LoginBody";
import VacancyList from "./Pages/Bodys/VacancyList/VacancyList";
import ListVacancy from "./Pages/Bodys/ListVacancy/ListVacancy";
import UserDataBody from "./Pages/Bodys/UserData/UserDataBody";
import { UserManager } from "./common/UserManager";

function App() {
  document.documentElement.setAttribute("data-theme", "light");
  const userManager = new UserManager();
  useEffect(async () => {
    const loaded = await userManager.loadData();
    if (loaded) {
      setPage(<StagesRegister setPage={setPage} userManager={userManager} />);
    }
  }, []);
  const [СurrentPage, setPage] = useState(undefined);
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  const [sideMenu, setsideMenu] = useState([
    <div
      onClick={() =>
        setPage(<UserDataBody setPage={setPage} userManager={userManager} />)
      }
    >
      Личные данные
    </div>,
    <div
      onClick={() =>
        setPage(<StagesRegister setPage={setPage} userManager={userManager} />)
      }
    >
      Отмеченные вакансии
    </div>,
    <div
      onClick={() =>
        setPage(<StagesRegister setPage={setPage} userManager={userManager} />)
      }
    >
      Отмеченные мероприятия
    </div>,
    <div
      onClick={() =>
        setPage(<StagesRegister setPage={setPage} userManager={userManager} />)
      }
    >
      Активные отклики
    </div>,
    <div
      onClick={() =>
        setPage(<StagesRegister setPage={setPage} userManager={userManager} />)
      }
    >
      История откликов
    </div>,
  ]);

  useEffect(
    () => setPage(<LoginBody setPage={setPage} userManager={userManager} />),
    [1]
  );

  return (
    <div className={style.App}>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
        setPage={setPage}
        userManager={userManager}
        currentPage={СurrentPage?.type.name}
      />
      <div style={{ flexGrow: 1, position: "relative" }}>
        <SideMenu
          enabled={burger}
          setEnabled={setBurger}
          childrens={sideMenu}
        />
        {СurrentPage}
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
