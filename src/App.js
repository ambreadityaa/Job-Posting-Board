import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

import AuthService from "./service/auth.service";

import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import {Board} from "./components/Board";
import { ContactPage } from "./components/Contact";
import logo from "./assests/img/cuvette_logo.svg";
import { CreateInterview } from "./components/CreateInterview";
import { Profile } from "./components/Profile";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const user = AuthService.getCurrentUser();
  
  useEffect(() => {
    if(user){
      setCurrentUser(user)
    }
  
  },[])
  
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  
    
  return (
    <div className="h-screen overflow-hidden">
      <nav className="nav-bar bg-white  grid justify-items-center    w-full z-20 top-0 start-0  shadow-md border-b-2">
        < div className="  grid grid-cols-2  w-11/12   ">
          <div
            to={"/"}
            className="navbar-brand max-w-screen-xl flex  items-start justify-between  p-4">
            <img src={logo} alt="Logo"></img>
          </div>

          <div className="p-3">
            {currentUser ? (
              <div className="navbar-nav ml-auto flex flex-row  justify-end gap-x-6  text-2xl">
                <div className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </div>
                <div className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    Log Out
                  </a>
                </div>
              </div>
            ) : (
              <div className="navbar-nav ml-auto flex flex-row justify-end gap-x-6  text-2xl">
                <div className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </div>

                <div className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </div>
                <div className="nav-item">
                  <Link to={"/contactUs"} className="nav-link">
                   Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className=" bg-slate-200  min-h-full  ">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/board" element={<Board/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path='/createInterview' element={<CreateInterview/>}/>
          <Route exact path="/contactUs" element={<ContactPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
