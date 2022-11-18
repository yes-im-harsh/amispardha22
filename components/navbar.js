import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import amityLogo from "../public/new-amity.png";
import { useRouter } from "next/router";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Navbar, Button } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <Navbar
      className="px-2 py-2.5 sm:px-4 border-b-0 "
      fluid={true}
      rounded={true}
    >
      <Image src="/amitylogo.png" height={50} width={150} alt="AmityLogo" />

      <div className="hamburger flex md:order-2">
        {/* <Button className="hidden">Register</Button> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="navright">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/event">Event</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/timeline">Timeline</Navbar.Link>
        {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link> */}
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
