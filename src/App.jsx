import { useEffect, useState } from "react";
import style from "./App.module.scss";
import RegisterBody from "./Pages/Bodys/Register/RegisterBody";
import MainHeader from "./Pages/Headers/MainHeader";
import MainFooter from "./Pages/Footers/MainFooter";
import VacancyCreate from "./Pages/Bodys/VacancyCreate/VacancyCreate";

function App() {
  document.documentElement.setAttribute("data-theme", "light");

  const [СurrentPage, setPage] = useState(undefined);
  const [burger, setBurger] = useState(false);
  const [notify, setNotify] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => setPage(<VacancyCreate setPage={setPage} />), [1]);

  return (
    <div className={style.App}>
      <MainHeader
        setBurger={setBurger}
        setNotify={setNotify}
        setSearch={setSearch}
        setPage={setPage}
        currentPage={СurrentPage?.type.name}
      />
      {СurrentPage}
      <MainFooter />
    </div>
  );
}

export default App;
