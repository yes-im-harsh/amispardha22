import Head from "next/head";
import Image from "next/image";
import { Button } from "flowbite-react";
import Work from "../public/Amispardha2.jpg";
import TimelineComponent from "../components/TimelineComponent";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function homepage() {
  return (
    <>
      <div className="homecontainer">
        <div class="home_section">
          <div class="about_content">
            <h1 class="title">Welcome To AmiSpradha 2.0</h1>
            <span className="quote">
              Pitching ideas that can change the society
            </span>
            <br />
            <p>
              The event is aimed at hunting/searching for bright minds with the
              out-of-box critical thinking/ use of technology approach to
              generate a real time solution for the problems faced by the
              society and the Nation. It is an initiative to provide students a
              platform to solve some of the pressing problems we face in our
              daily lives, and thus inculcate a culture of product innovation
              and a mindset of problem solving.
            </p>
            <br />
            <Button className="my-4">
              Register
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>

        <div>
          <Image
            src="/dummy.png "
            alt=""
            height={550}
            width={600}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* <div className=" bg-white w-full h-screen  flex flex-col justify-between">
      

        <div className="grid md:grid-cols-2 max-w-[1280px] m-2">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl">Welcome to</p>
            <h1 className="py-3 text-3xl md:text-5xl font-bold text-[#407AD8]">
              Amispardha 2.0
            </h1>
            <span className="quote">Pitching ideas that can change the society</span><br/>
            <p className="text-base tracking-wide">
            The event is aimed at hunting/searching for bright minds with the out-of-box critical thinking/ use of technology approach to generate a real time solution for the problems faced by the society and the Nation. It is an initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving.
            </p>
            <Button className="my-4">
              Register
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          <div>
          <Image src="/dummy.png " alt=""
        height={550}
        width={600}
        className="w-full h-auto"
        />
            
          </div>
        </div>
      </div> */}

      {/* <TimelineComponent /> */}
    </>
  );
}
