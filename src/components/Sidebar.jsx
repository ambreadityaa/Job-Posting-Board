import React from "react";
import Home from "../assests/img/home.png";

export const Sidebar = () => {
  return (
    <>
      <div className="mt-5 w-16 px-2 bg-slate-200 shadow-md border-r-2">
        <img src={Home} alt="Home.png"></img>
      </div>
    </>
  );
};
