import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Card({ project }) {
  return (
    <div className="flex flex-col justify-between bg-opacity-70 items-center hover:shadow-xl transition bg-[#3F4E4F] shrink-0 rounded-[10px] w-full max-w-xs sm:max-w-sm md:max-w-md">
         <div className="w-full h-2/3 overflow-hidden p-8 items-center">
      <img className="h-full rounded-[10px] w-full object-cover" src={project.icon}></img>
      </div> 


      <h1 className="font-semibold text-xl text-white">{project.title}</h1>
      <p className="font-medium text-medium text-white opacity-90 text-center m-2">
        {project.lang}
      </p>
      <p className="font-medium text-medium text-white">
        {project.description}
      </p>
      <div className="flex justify-between items-center w-full p-4">
        <p className="font-medium text-small text-white opacity-90">
          {project.date}
        </p>
        <button className="h-10 w-10 border-2 rounded-full border-[#3F4E4F]">
          <a href={project.link}>
            <FaGithub className="w-full h-full object-cover" />
          </a>
        </button>
      </div>
    </div>
  );
}
