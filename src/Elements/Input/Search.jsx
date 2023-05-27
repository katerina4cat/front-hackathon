import React from "react";
import cl from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/search.svg";
import { ReactComponent as CrossIcon } from "../../Assets/Icons/cross.svg";

function Search(props) {
  const [value, setValue] = props.vals || ["", () => {}];
  return (
    <div className={cl.Border}>
      <div className={[cl.Search, props.className].join(" ")}>
        <SearchIcon className={cl.SearchIcon} onClick={() => setValue("")} />
        <input
          {...props}
          className={cl.InputText}
          value={value}
          placeholder={props.placeholder || "Поиск"}
          onChange={(e) => setValue(e.target.value)}
        />
        <CrossIcon className={cl.CrossIcon} onClick={() => setValue("")} />
      </div>
    </div>
  );
}

export default Search;
