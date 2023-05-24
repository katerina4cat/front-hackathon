import style from "./App.module.scss";
import Login from "./Pages/Pages/Login";
import Register from "./Pages/Pages/Register";

function App() {
  document.documentElement.setAttribute("data-theme", "light");

  return (
    <div className={style.App}>
      <Register />
    </div>
  );
}

export default App;
