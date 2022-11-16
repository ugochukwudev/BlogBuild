import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#202532] w-full ">
        <div className="bg-[#202532] text-white flex flex-col lg:flex-row ml-auto mr-auto 2xl:w-4/12">
          <div className="ml-10 md:ml-20 lg:ml-24 xl:ml-28 lg:w-3/12 mb-10">
            <p className="text-base mt-20">
              Learn all you want , teach and interact with others ...
            </p>
          </div>
          <div className="ml-10 md:ml-20 lg:ml-24 xl:ml-8 lg:w-3/12 mb-10 lg:mt-14 ">
            <h4 className="uppercase font-bold text-base">QUICK LINKS</h4>
            <ul className="list-disc text-base ml-5">
              <Link to="/about">
                <li>About us</li>
              </Link>

              <Link to="/courses">
                <li>Courses</li>
              </Link>
              <Link to="/">
                <li
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Blog
                </li>
              </Link>
              {/* <li>Success stories</li> */}
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="ml-10 md:ml-20 lg:ml-24 xl:ml-8 lg:w-3/12 mb-10 lg:mt-14 ">
            <h3 className="uppercase font-bold text-base mb-2">CONTACT INFO</h3>
            <div className="flex text-base">
              <img src="https://blog.daba.school/icons/phone.svg" alt="reee" />
              <p className="ml-6">+234 802 429 9898</p>
            </div>
            <p className="ml-8 mb-2">+234 802 429 9898</p>
            <div className="flex text-base">
              <img src="https://blog.daba.school/icons/web.svg" alt="reee" />
              <p className="ml-6 mb-2"> Lagos, Nigeria.</p>
            </div>
            <div className="flex text-base">
              <img src="https://blog.daba.school/icons/mail.svg" alt="reee" />
              <p className="ml-6">paulambrose5002@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <hr className="w-11/12 ml-auto mr-auto" />
          <div className="flex mb-4 mt-10 justify-center text-center lg:flex-row flex-col">
            <p className=" text-white text-base">Tech X © 2022</p>
            <p className="ml-1 text-white text-base">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
