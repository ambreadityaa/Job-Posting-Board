import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import AuthService from "../service/auth.service";
import { UserIcon } from "@heroicons/react/16/solid";

export const ProfileDailog = () => {
  const user = AuthService.getCurrentUser();
  const [name, setName] = useState(user.user_name);
  const [companySize, setCompanySize] = useState(user.user_size);
  const [phone, setPhone] = useState(user.user_phone);
  const [email, setEmail] = useState(user.user_email);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
        <UserIcon className="size-4 fill-white/80" />
        Account
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-2xl  w-5/12 space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold text-xl">
              {user.user_name}
            </DialogTitle>

            <form>
              <div className="w-11/12 flex flex-row gap-5 border-t border-gray-300 pt-2 pb-3  ">
                <label className="py-2 px-2 font-semibold w-2/6"> Name </label>
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="w-11/12 flex flex-row gap-5 border-t border-gray-300 pt-2  pb-3">
                <label className="py-2 px-2 font-semibold w-2/6"> Size </label>
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="number"
                  id="company-size"
                  placeholder="Company Size"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                />
              </div>
              <div className="w-11/12 flex flex-row gap-5 border-t border-gray-300 pt-2  pb-3">
                <label className="py-2 px-2 font-semibold w-2/6"> Phone </label>
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="string"
                  id="company-number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-11/12 flex flex-row gap-5 border-t border-gray-300 pt-2  pb-3">
                <label className="py-2 px-2 font-semibold w-2/6"> Email </label>
                <input
                  className="bg-slate-100 w-full py-2 px-2"
                  type="email"
                  id="email"
                  placeholder="Company Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>

            <div className="flex justify-between">
              <button className="font-semibold text-red-600 border-2  rounded-lg px-2 py-1 hover:bg-gray-100">Delete User </button>
              <div className="flex gap-7"> 
                <button className="font-semibold text-white bg-red-600 rounded-lg px-3 py-1" onClick={() => setIsOpen(false)}>Cancel</button>
                <button className="font-semibold text- border-2  rounded-lg px-3 py-1 text-white bg-blue-600"  onClick={() => setIsOpen(false)}>Update</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
