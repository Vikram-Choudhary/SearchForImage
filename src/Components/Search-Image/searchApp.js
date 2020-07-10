import React from "react";
import SearchBar from "./searchBar";
import SearchImage from "./searchImage";
import { useHistory } from "react-router-dom";
export default function SearchApp() {
  const [searchValue, setSearchValue] = React.useState("mountain");
  let history = useHistory();
  const logOut = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    history.push("/");
  };
  const handelSearch = (value = "") => {
    setSearchValue(value.toLowerCase());
  };

  return (
    <div>
      <div className="float-right">
        <button
          type="button"
          className="btn btn-secondary logout"
          onClick={logOut}
        >
          Logout
        </button>
      </div>
      <SearchBar onSubmit={handelSearch} />
      <SearchImage searchedValue={searchValue} />
    </div>
  );
}
