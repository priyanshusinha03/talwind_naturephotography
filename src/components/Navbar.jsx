/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("maroon");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      // style={{ backgroundColor: `${color}`,zIndex:12121212,marginBottom:'20px' }}
      className="bg-gradient-to-r from-red-800 to-violet-900 fixed left-0 top-0 w-full z-100- ease-in-duration-300"
      style={{zIndex:12121,opacity:0.9,}}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Lok Janshakti Party</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex font-bold">
          <li className="p-4">
            <Link href="/about-us">
              <h1>About Us</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">
              <h1>Upcoming Events</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/about-us">
              <h1>News & Media</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <h1>Gallery</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
              <h1>Bihar First Bihari First</h1>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/contact">
             <button className="bg-red-700 hover:bg-red-700 rounded text-white font-bold py-2 px-10">En -{">"} Hn</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu  */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">
                <h1>Home</h1>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/portfolio">
                <h1>Work</h1>
              </Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
