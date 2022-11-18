import React from "react";
import Image from "next/image";
import { Button, Timeline } from "flowbite-react";
const about = () => {
  return (
    <>
      <div className="about_section">
        <div className="amity_img">
          <img src="/university.jpg " alt=""  className="mb-10"/>
        </div>
        <h1 className="text-center text-2xl">
          <b className="text-[#1A56DB]">AMITY UNIVERSITY, PATNA</b>
        </h1>
        <br />
        <div className="about_content ">
          <p>
            About University, Patna belongs to a group of India's leading
            research and innovation driven University. Amity Universtiy is
            ranked amongst the top 3% Unviersities globally by QS-2018 ranking.
            Amity University, Patna is a part of 25 years old, leading education
            group of India, set up witha vision to contribute in nation builing
            through excellence in higher education. Amity University has more
            than 150,000 students, pursuing 300 programs across campuses in
            India and abroad. Amity University has facilitated more than 36,000
            on - campus placements in the past years. Amity is research driven
            University with more than 6000 research Publication, more than 300
            on-going research projects, 500 books in diverse area, 1001 patents,
            1260 Management case studies in areas of strategic Management,
            Marketing, Finance, HRM, and Economics etc. Amity University, Patna
            is yet another landmark University by Amity education group to
            revolutionize the Indian higher education sector by providing
            globally benchmarked, research and employment-oriented education.
            The endeavor of Amity University, Patna is to provide every student
            the advantage of very strong placement cell and a large team of the
            Amity Corporate Resource Centre; which is involved in an intensive
            interaction with corporates and facilate career planning for
            students. Strong global alumni base of Amity University translates
            intro a tremendous advantage for the students in-terms of network
            building across the globe.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
