import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";
import { Sidebar } from "./Sidebar";

export const CreateInterview = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    setTitle("");
    setCandidates([]);
    setDescription("");
    setExperience("");
    setEndDate("");
    navigate("/board");
    // window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    
    const user =  AuthService.getCurrentUser().user_id;

   
    // Handle login logic here
    if (title && description && experience && candidates && endDate) {
      AuthService.createInterview(
        title,
        description,
        experience,
        candidates,
        endDate,
        user
      ).then(
        () => {
          navigate("/board");
          window.location.reload();
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  };
  return (
    <>
      <div className="min-h-screen flex  ">
        <Sidebar />
        <div className="bg-white w-full pl-16 pt-6">
          <form
            className=" flex flex-col items-start gap-y-10 mt-10 w-full "
            onSubmit={handleSubmit}>
            <div className="w-4/6 flex flex-row justify-around">
              <label htmlFor="Title" className="text-xl text-end pr-5 w-2/6">
                Job Title
              </label>
              <input
                className="bg-slate-100 w-4/6 py-2 px-2 "
                type="text"
                id="title"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="w-4/6 flex flex-row justify-around">
              <label
                htmlFor="description"
                className="text-xl text-end pr-5 w-2/6">
                Job Description
              </label>
              <input
                className="bg-slate-100 w-4/6 py-2 px-2"
                type="textarea"
                id="company-size"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-4/6 flex flex-row justify-evenly">
              <label
                htmlFor="experience"
                className="text-xl text-end pr-5 w-2/6">
                Experience Level
              </label>
              <input
                className="bg-slate-100 w-4/6 py-2 px-2"
                type="string"
                id="experience-level"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="w-4/6 flex flex-row justify-evenly">
              <label htmlFor="add" className="text-xl w-2/6 text-end pr-5 ">
                Add Candidate
              </label>

              <input
                className="bg-slate-100 w-4/6 py-2 px-2"
                type="text"
                id="add-candidate"
                value={candidates}
                onChange={(e) => setCandidates(e.target.value)}
              />
            </div>
            <div className="w-4/6 flex flex-row justify-evenly ">
              <label
                htmlFor="end-date"
                className="text-xl  w-2/6 text-end pr-5 ">
                End Date
              </label>

              <input
                className="bg-slate-100 w-4/6 py-2 px-2"
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="flex flex-row w-4/6 justify-end gap-x-10  ">
              <button
                className="w-1/6 text-xl bg-red-600
               text-white py-2 px-2 "
                type="submit"
                onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="w-1/6 text-xl bg-blue-600
               text-white py-2 px-2 "
                type="submit"
                onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
