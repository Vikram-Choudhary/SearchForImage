import React, { useState } from "react";
import InputField from "../Generic/inputField";

export default function SearchBar(props) {
  const initialState = {
    Beach: false,
    Bird: false,
    Food: false,
    Mountain: false,
  };
  const [activeState, setActiveState] = useState({
    ...initialState,
    Mountain: true,
  });
  const buttonList = [
    {
      name: "Beach",
      active: activeState.Beach,
    },
    {
      name: "Bird",
      active: activeState.Bird,
    },
    {
      name: "Food",
      active: activeState.Food,
    },
    {
      name: "Mountain",
      active: activeState.Mountain,
    },
  ];
  let searchValue = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };
  const handelButton = (value) => {
    setActiveState({ ...initialState, [value]: true });
    props.onSubmit(value);
  };
  return (
    <form className="form-group has-search" onSubmit={handleSubmit}>
      <span className="fa fa-search form-control-feedback"></span>
      <InputField
        type="text"
        className="form-control searchBar"
        placeholder="Search"
        getValue={(value) => {
          searchValue = value;
        }}
      />
      <div className="btn-group button-search" role="group">
        {buttonList.map((data, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`btn btn-secondary ${data.active && "active"}`}
              onClick={() => handelButton(data.name)}
            >
              {data.name}
            </button>
          );
        })}
      </div>
    </form>
  );
}
