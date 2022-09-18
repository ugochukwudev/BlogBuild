import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  const [nav, setNav] = useState(false);

  const displayDesign = () => {
    setNav((nav) => true);
  };

  const unDisplayDesign = () => {
    setNav(false);
  };

  return (
    <div>
      <nav className="relative flex mt-10 border-b-black-500 sm:mt-0 nav ml-auto mr-auto 2xl:w-6/12 mb-4">
        <Link to="/">
          <img
            className="h-14 w-14 mt-10 ml-4 md:ml-4 lg:ml-16"
            src="https://img.icons8.com/external-others-inmotus-design/2x/external-U-alphabet-others-inmotus-design-19.png"
            alt="logo"
          />
        </Link>
        <ul className=" lg:mt-16 lg:flex hidden  absolute right-4">
          <Link to="/">
            <li className=" hover:text-red-500 text-base px-6 font-bold">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-red-500 text-base px-6 font-bold">
              About us
            </li>
          </Link>
          <Link to="/courses">
            <li className="hover:text-red-500 text-base px-6 font-bold">
              Courses
            </li>
          </Link>
          {/* <Link to="/success-stories">
            <li className="hover:text-red-500 text-base px-6 font-bold">
              Success Stories
            </li>
          </Link> */}
          {/* <Link to="/contact">
            <li className="hover:text-red-500 text-base px-6 font-bold">
              Contact us
            </li>
          </Link> */}
          <Link to="/contact">
            <button className="text-base hover:text-[#d8383a] hover:bg-[transparent] hover:border-2 text-white font-bold bg-[#d8383a] text-center h-12 w-32 border-[#d8382A] border-8 -translate-y-3 rounded-xl mr-4">
              Contact Us
            </button>
          </Link>
        </ul>
        <AiOutlineMenu
          className="lg:hidden mt-14 h-8 w-8 absolute right-4"
          onClick={displayDesign}
        />
        {nav && (
          <div className="open-nav z-50 bg-[#d8383a] w-full absolute top-0 flex flex-col items-end p-4  justify-center h-96">
            <ul className="relative">
              <img
                onClick={unDisplayDesign}
                className=" m-auto text-center align-middle mr-8"
                src="https://blog.daba.school/_next/image?url=%2Ficons%2Fx.svg&w=96&q=75"
                alt="cancel"
              />
              <Link onClick={() => unDisplayDesign()} to="/">
                <li className="text-white font-bold text-base mb-6 ml-16 px-1 leading-normal ">
                  Home
                </li>
              </Link>
              <Link onClick={() => unDisplayDesign()} to="/about">
                <li className="text-white font-bold text-base mb-6 ml-10 px-1 leading-normal ">
                  About us
                </li>
              </Link>
              <Link onClick={() => unDisplayDesign()} to="/courses">
                <li className="text-white font-bold text-base mb-6 ml-12 px-1.5 leading-normal ">
                  Courses
                </li>
              </Link>
              {/* <Link onClick={() => unDisplayDesign()} to="/success-stories">
                <li className="text-white font-bold text-base mb-6 leading-normal mr-10">
                  Success Stories
                </li>
              </Link> */}
              {/* <Link onClick={() => unDisplayDesign()} to="/contact">
                <li className="text-white font-bold text-base mb-6 ml-8 leading-normal ">
                  Contact us
                </li>
              </Link> */}
              <Link onClick={() => unDisplayDesign()} to="/contact">
                <li className="text-white  font-bold text-base mb-6 ml-8 px-3 leading-normal md:ml-12 md:px-5">
                  Contact Us
                </li>
              </Link>
              {/* <p className="absolute h-96 w-4 bg-green-900 top-10 right-6"></p> */}
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
