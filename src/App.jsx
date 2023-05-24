import { useEffect, useState } from "react";
import style from "./App.module.scss";
import Register from "./Pages/Pages/Register";

function App() {
  document.documentElement.setAttribute("data-theme", "light");
  const [СurrentPage, setСurrentPage] = useState(undefined);
  useEffect(() => setСurrentPage(<Register setPage={setСurrentPage} />), [1]);
  return <div className={style.App}>{СurrentPage}</div>;
}

export default App;
