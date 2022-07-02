import React, { useState, useContext } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BlogContent } from "./Home";
const Homemenu = () => {
  const [display, setDisplay] = useState(false);
  const { num } = useContext(BlogContent);
  const resetDisplay = () => {
    setDisplay((display) => !display);
  };

  const removeMenu = () => {
    setDisplay(false);
  };
  return (
    <div>
      {num === 1 && (
        <div className="sticky z-50 bg-[#d8383a] flex flex-col w-full h-40 lg:h-full relative mt-10 ">
          <div className="ml-auto mr-auto 2xl:w-6/12 relative">
            <input
              className="pl-12 ml-14 rounded-tiny focus:outline-none border-gray-300 h-10 mt-4 w-4/6 md:absolute md:right-8 md:w-48 md:top-2 lg:w-3/12 "
              type="search"
              placeholder="   &#xf002; Search articles or topic"
            />

            <div className="flex text-white cursor-pointer text-base lg:text-lg m-auto leading-none px-3 py-1 border-none rounded bg-transparent block lg:hidden outline-none focus:outline-none my-2 relative">
              <h4
                onClick={resetDisplay}
                className=" z-50 absolute right-44 md:left-12 md:top-12 lg:hidden"
              >
                Browse Topic
              </h4>
              <AiOutlineArrowDown
                onClick={resetDisplay}
                className=" z-50 mt-1 ml-1 absolute right-40 md:left-36 md:top-12 lg:hidden"
              />
            </div>

            {display && (
              <ul className="bg-[#d8383a] md:w-fit z-30 py-4 h-full w-8/12 mx-auto my-0 md:mx-2 mt-10 sticky s">
                <li
                  onClick={removeMenu}
                  className=" z-10 border-white border-1 p-2 w-fit mx-auto  text-red-700 bg-white text-center"
                >
                  #All
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white  border-2 p-1 w-fit mx-auto my-4 text-white text-center "
                >
                  AFFILLIATE MARKETING
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-1 w-fit mx-auto my-4 text-white text-center "
                >
                  #CAKES
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-1 w-fit mx-auto my-4 text-white text-center "
                >
                  #CRYPTOCURRENCY
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-1 w-fit mx-auto my-4 text-white text-center "
                >
                  #FINANCE
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-2 w-fit mx-auto my-4 text-white text-center"
                >
                  #FROM DABA WITH LOVE
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-1 w-fit mx-auto my-4 text-white text-center"
                >
                  #PERSONAL DEVELOPEMENT
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-2 w-fit mx-auto my-4 text-white text-center "
                >
                  #PRESS RELEASE
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-2 w-fit mx-auto my-4 text-white text-center "
                >
                  #SKILLS
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-2 w-fit mx-auto my-4 text-white text-center "
                >
                  #SOCIAL MEDIA
                </li>
                <li
                  onClick={removeMenu}
                  className="border-white border-2 p-1 w-fit mx-auto my-4 text-white text-center "
                >
                  #TECHNOLOGY
                </li>
              </ul>
            )}

            <ul className="hidden lg:flex lg:block mt-4 lg:flex-wrap lg:w-8/12 sticky ml-14">
              <li className="border-white border p-2 w-fit h-fit text-white m-2 text-xs">
                All
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #AFFILLIATE MARKETING
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #CAKES
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #CRYPTO CURRENCY
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #FINANCE
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                # FROM DABA WITH LOVE
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                # PRESS RELEASE
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #SKILLS
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #SOCIAL MEDIA
              </li>
              <li className="border-white border p-2 w-fit text-white m-2 text-xs">
                #TECHNOLOGY
              </li>
            </ul>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Homemenu;
