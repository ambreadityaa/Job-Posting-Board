import React from 'react'
import { Sidebar } from "./Sidebar";
import AuthService from "../service/auth.service";

export const Profile = () => {
    
    const user =  AuthService.getCurrentUser();
    
  return (
    <>
    <div className="min-h-screen flex  ">
        <Sidebar/>
        <div className="bg-white w-full pl-16 pt-6 flex flex-col ">
            <div className='flex flex-row w-11/12 justify-between pb-5 '>
                <div className='text-lg '>Company Name : {user.user_name}</div>
                <div className='text-lg '>Phone : {user.user_phone}</div>
                <div className='text-lg '>Email : {user.user_email}</div>
                <div className='text-lg '>Company Size : {user.user_size}</div>  
            </div>
            <div>2</div>
            
        </div>
        </div>
    </>
  )
}
