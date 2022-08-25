import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const handlerToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="w-full lg:px-[75px] mx-auto nav-shadow">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <img src="/logo.png" className="mx-auto w-[11rem] md:w-[182px] " />
          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 md:ml-6 ${(toggleNav)? "block-nav" : "hidden-nav"}`}
            id="nav-content"
        >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
                <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
                >
                Bridge
                </a>
            </li>
            <li className="mr-3">
                <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
                >
                Whitepaper
                </a>
            </li>
            <li className="mr-3">
                <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
                >
                Guide Book
                </a>
            </li>
            <li className="mr-3">
                <a
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#"
                >
                Docs
                </a>
            </li>
            </ul>
        </div>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            onClick={handlerToggleNav}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div>ENG</div>
      
          
        
      </nav>
    </div>
  );
}
