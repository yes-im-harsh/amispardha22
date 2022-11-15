import Head from "next/head";
import Image from "next/image";
import { Button } from "flowbite-react";
// import Work from "../public/Work.jpg";
import Work from "../public/Amispardha2.jpg";
import TimelineComponent from "../components/TimelineComponent";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className=" bg-white w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* <svg
          className="banner-bottom absolute bottom-0 w-[100%] left-0 z-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -8 1400 260"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L24,218.7C48,181,96,107,144,85.3C192,64,240,96,288,133.3C336,171,384,213,432,192C480,171,528,85,576,74.7C624,64,672,128,720,176C768,224,816,256,864,245.3C912,235,960,181,1008,144C1056,107,1104,85,1152,80C1200,75,1248,85,1296,112C1344,139,1392,181,1416,202.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg> */}

        <div className="grid md:grid-cols-2 max-w-[1240px] m-20">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Welcome to</p>
            <h1 className="py-3 text-3xl md:text-5xl font-bold text-[#407AD8]">
              Amispardha 2.0
            </h1>
            <p className="text-base tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Iure quod esse incidunt aut quisquam tempore ullam
            </p>
            <Button className="my-4">
              Register
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          <div>
            <Image src={Work} alt="Work" className="w-full h-auto"></Image>
          </div>
        </div>
      </div>

      <TimelineComponent />
    </>
  );
}
