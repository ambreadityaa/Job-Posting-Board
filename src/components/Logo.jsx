import React from "react";
import logo from "../assests/img/cuvette_logo.svg"
export const Logo = () => {
  return (
    <>
      <div
        to={"/"}
        className="navbar-brand max-w-screen-xl flex  items-start justify-between  p-4">
        <img src={logo} alt="Logo"></img>
      </div>
    </>
  );
};
