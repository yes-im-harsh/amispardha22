import React from "react";
import { OrganisingTeam } from "../components/Teams";

const Card = ({ name, about, role, img, job }) => {
  return (
    <div className="flex flex-col justify-evenly shadow w-[301px] h-[350px] p-6 rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <img
        src={img}
        alt="founder"
        className="h-auto w-auto max-w-32 max-h-32 mx-auto ring-2 ring-offset-4 ring-violet-800 rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-start divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className=" text-lg md:text-md text-center text-blue-500 font-semibold">
            {role}
          </h2>
          <p className="px-5 text-xs text-center font-semibold sm:text-base dark:text-gray-400">
            {name}
          </p>
          <p className="px-5 text-xs sm:text-base text-center dark:text-gray-400">
            {job}
          </p>
          <p className="px-5 text-xs sm:text-base text-center dark:text-gray-400">
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
