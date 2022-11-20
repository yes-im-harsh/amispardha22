import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Avatar, Button } from "flowbite-react";
import Work from "../public/Amispardha2.jpg";
import TimelineComponent from "../components/TimelineComponent";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Developers, Members, OrganisingTeam } from "../components/Teams";
import Card from "../components/Card";

const team = () => {
  return (
    <>
      <h1 className="text-xl md:text-3xl lg:text-3xl text-center font-bold pb-10">
        ORGANISING COMMITTEE
      </h1>
      <div className="w-100vw mx-auto">
        <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
          {OrganisingTeam.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              about={item.about}
              role={item.role}
              img={item.img}
              job={item.job}
            />
          ))}
        </div>

        {/* Part-2 */}
        <h1 className="text-xl md:text-3xl lg:text-3xl  text-center font-bold my-10">
          Developers & Editor
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
          {Developers.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              about={item.about}
              role={item.role}
              img={item.img}
            />
          ))}
        </div>
        {/* Part-3 */}
        <h1 className="text-xl md:text-3xl lg:text-3xl  text-center font-bold my-10">
          Co-Ordinators & Members
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
          {Members.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              about={item.about}
              role={item.role}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default team;
