import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    
    
    if (email && password) {
      AuthService.login(email, password).then(
        () => {
          navigate("/board");
          window.location.reload();
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
    else{
      
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="login grid grid-cols-2 justify-items-center w-11/12 ">
          <div className="text-l   m-auto font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            accusamus in, obcaecati voluptas eligendi quod quasi, unde quae
            voluptate qui nulla voluptatum ullam architecto consectetur vel,
            recusandae aspernatur cupiditate cumque.
          </div>
          <div className="bg-white border-x border-y rounded-md border-gray-500  w-2/3 py-5 flex flex-col items-center ">
            <div className="text-2xl text-center font-medium mb-5 ">Login</div>

            <form className="w-full flex flex-col items-center gap-y-4 ">
              <div className="w-4/6">
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 
                />
              </div>
              <div className="w-4/6">
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </div>

              {message && (
                <div className="">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}

              <button
                className="w-4/6 text-xl bg-blue-600
               text-white py-2 px-2 "
                type="submit"
                onClick={handleSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
