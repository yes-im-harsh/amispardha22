import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Avatar, Button } from "flowbite-react";
import Work from "../public/Amispardha2.jpg";
import TimelineComponent from "../components/TimelineComponent";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Developers, Members, OrganisingTeam } from "../components/Teams";
import Card from "../components/Card";
const Team = () => {

  return (
    <>
      <h2 className="text-xl md:text-3xl lg:text-3xl text-center text-blue-400 font-bold pb-10">
        ORGANISING COMMITTEE
      </h2>
      <div className="w-100vw mx-auto flex ">
        <aside className='sidebar hidden  md:block'>
          <nav className="space-y-8">
            <div className="flex flex-col w-[14rem] items-center">
              <div className="mr-[-1rem]">
              <h3 className="my-3 mr-[89px] text-2xl font-semibold text-blue-600">Chief Patron</h3>
              <div className="space-y-1 leading-tight mr-4">
                <h3 className='font-semibold '>Hon'ble Dr. Ashok K.Chauhan</h3>
                <p>Founder President</p>
                <p>Amity Education Group</p>
              </div>
              <br />
              <div className="space-y-1 leading-tight mr-10">
                <h3 className='font-semibold '>Hon'ble Dr. Atul Chauhan</h3>
                <p>Chancellor</p>
                <p>Amity University</p>
              </div>
              </div>
              <div className='mr-12'>
                <h3 className="my-3 text-2xl font-semibold text-blue-600">Mentors</h3>
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold ' >Mr. U Ramachandran</h3>
                  <p>Sr. Vice President</p>
                  <p>Amity Education Group</p>
                </div>
                <br />
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold '>Mr. Gaurav Gupta</h3>
                  <p>Vice President</p>
                  <p>Amity Education Group</p>
                </div>
                <h3 className="my-3 mr-16 text-2xl font-semibold text-blue-600">Patron</h3>
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold '>Dr. Vivekanand Pandey</h3>
                  <p>Pro Vice Chancellor</p>
                  <p>Amity University Patna</p>
                </div>
                <br />
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold '>Mr. Siddharth Shankar</h3>
                  <p>Deputy Registrar</p>
                  <p>Amity University Patna</p>
                </div>
                <br />
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold ' >Dr. Sushil Kumar</h3>
                  <p>Dy. Controller of Exam</p>
                  <p>Amity University Patna</p>
                </div>
                <br />
                <h3 className="my-3 text-2xl font-semibold text-blue-600 mr-10">Advisor</h3>
                <div className="space-y-1 leading-tight">
                  <h3 className='font-semibold '>Dr. Shashi Bhushan</h3>
                  <p>Director, ASET</p>
                  <p>Amity University Patna</p>
                </div>
              </div>
              <br />
            </div>
          </nav>
        </aside>

        
        {/* Part-2 */}
        <div className="imageprofile">
          <h1 className="text-xl md:text-2xl lg:text-2xl  text-center font-bold mb-10">
            Developers & Editor
          </h1>
          <div className="flex flex-row flex-wrap justify-center  items-center">
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
          <h1 className="text-xl md:text-2xl lg:text-2xl  text-center font-bold my-10">
            Co-Ordinators & Members
          </h1>
          <div className="flex flex-row flex-wrap justify-center items-center">
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
          <h1 className="text-xl md:text-2xl lg:text-2xl  text-center font-bold my-10">
            Convenors & Co-Convenor
          </h1>
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

        </div>
      </div>
    </>
  );
};

export default Team;
