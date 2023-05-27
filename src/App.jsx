import { useEffect, useState } from "react";
import style from "./App.module.scss";
import RegisterBody from "./Pages/Bodys/Register/RegisterBody";
import MainHeader from "./Pages/Headers/MainHeader";
import MainFooter from "./Pages/Footers/MainFooter";
import VacancyCreate from "./Pages/Bodys/VacancyCreate/VacancyCreate";
import SideMenu from "./Elements/SideMenu/SideMenu";
import StagesRegister from "./Pages/Bodys/StagesRegister/StagesRegister";
import LoginBody from "./Pages/Bodys/Login/LoginBody";
import VacancyList from "./Pages/Bodys/VacancyList/VacancyList";

function App() {
  document.documentElement.setAttribute("data-theme", "light");

  const [СurrentPage, setPage] = useState(undefined);
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);
  const [sideMenu, setsideMenu] = useState([
    "Личные данные",
    "Отмеченные вакансии",
    "Отмеченные мероприятия",
    "Активные отклики",
    "История откликов",
  ]);

  useEffect(() => setPage(<VacancyList setPage={setPage} />), [1]);

  return (
    <div className={style.App}>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
        setPage={setPage}
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
