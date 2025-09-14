import React from "react";
import timelineData from "../data/timelineData";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience" className="min-h-screen">
        <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black mb-5">Work Experience.</h1>
        <hr class="w-[90%] border-0.5 bg-gray-400 mb-20 text-center" />
        </div>

    <div className="relative py-10">

      {/* Vertical line down the middle */}
      <div className="absolute left-1/2 h-[95%] w-0.5 -translate-x-1/2 bg-black border-3 top-12"></div>

      <div className="flex flex-col space-y-12">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={item.id} className="flex w-full items-center">
              {/* Left side */}
              <div className="w-1/2 flex justify-end pr-8">
                {isLeft && (
                  <div className="bg-[#A5C8D6] p-4 rounded-xl shadow-md max-w-sm">
                    <p className="font-bold text-black dark:text-white text-xl">
                      {item.title}
                    </p>
                    <div className="flex justify-between">
                    <p className="font-medium text-sm">
                        {item.company}
                    </p>
                    <p className="font-medium text-sm opacity-60">{item.date} </p>
                    </div>
                    {item.description && (
                    <ul className="mt-2 list-disc text-sm text-black block p-4 space-y-3">
                      {item.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Center circle */}
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-slate-200 grid place-items-center border-3 z-10">
                  {item.icon}
                </div>
              </div>

              {/* Right side */}
              <div className="w-1/2 flex justify-start pl-8">
                {!isLeft && (
                  <div className="bg-[#A5C8D6] p-4 rounded-xl shadow-md max-w-sm">
                    <p className="font-bold text-black dark:text-white text-xl">
                      {item.title}
                    </p>
                    <div className="flex justify-between">
                    <p className="font-medium text-sm">
                        {item.company}
                    </p>
                    <p className="font-medium text-sm opacity-60">{item.date} </p>
                    </div>
                    {item.description && (
                    <ul className="list-disc mt-2 text-sm text-black p-4 space-y-3 block">
                      {item.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </Element>
  );
};

export default Experience;
