import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="sticky bottom-0 left-0 flex flex-col justify-center items-center px-3 sm:px-10 pt-10 mt-2  sm:mt-10 pb-3 sm:pb-0 md:pb-4 bg-white">
      <div className=" w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#E5E7EB]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[20px] text-[#6B7280]">
          © 2022 Amispardha.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          <Link
            href="https://www.facebook.com/profile.php?id=100076016590316&mibextid=LQQJ4d"
            target="_blank"
          >
            <BsFacebook className="w-[21px] h-[21px] object-contain cursor-pointer mr-6 text-[#6B7280]" />
          </Link>

          <Link
            href="https://instagram.com/aset_aup?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <BsInstagram className="w-[21px] h-[21px] object-contain cursor-pointer mr-6 text-[#6B7280]" />
          </Link>
          <Link
            href="https://www.linkedin.com/school/amity-university-patna/"
            target="_blank"
          >
            <BsLinkedin className="w-[21px] h-[21px] object-contain cursor-pointer mr-6 text-[#6B7280]" />
          </Link>

          <BsTwitter className="w-[21px] h-[21px] object-contain cursor-pointer mr-0 text-[#6B7280]" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
