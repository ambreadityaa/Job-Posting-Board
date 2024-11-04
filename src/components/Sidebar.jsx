import React from "react";

import { useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/16/solid";

export const Sidebar = () => {
  const navigate = useNavigate();
  const handleRouteHome = () => {
    navigate("/board");
  };

  return (
    <>
      <div className="mt-5 w-16 px-2 bg-slate-200 shadow-md border-r-2">
        <HomeIcon className="size-10 fill-blue-600" onClick={handleRouteHome} />
      </div>
    </>
  );
};
