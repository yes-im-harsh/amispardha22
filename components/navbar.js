import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import amityLogo from "../public/new-amity.png";
import { useRouter } from "next/router";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Navbar, Button } from "flowbite-react";

const navbar = () => {
  return (
    <Navbar
      class="px-2 py-2.5 sm:px-4 border-b-0 bg-[#ECF0FB]"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="hidden">Register</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/timeline">Timeline</Navbar.Link>
        {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link> */}
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
