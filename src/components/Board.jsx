import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";


export const Board = () => {
 
  
  const navigate = useNavigate();
  const handleCreateInterview = () => {
    
    navigate('/createInterview');
    // window.location.reload();
    
      
  };

  return (
    <>
      <div className="min-h-screen flex  ">
        <Sidebar/>
        <div className="bg-white w-full pl-16 pt-6">
       
            <button
              className="text-xl bg-blue-600
               text-white py-1 px-3 rounded-md "
              onClick={handleCreateInterview}>
              Create Interview
            </button>
         
        </div>
      </div>
    </>
  );
};
