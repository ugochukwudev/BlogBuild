import React, { useState, useContext, useCallback, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BlogContent } from "./Home";
import { client } from "../Home/BlogData";
const Homemenu = () => {
  const [display, setDisplay] = useState(false);

  const { num, setsearchtoinput, sethashtag } = useContext(BlogContent);
  const resetDisplay = () => {
    setDisplay((display) => !display);
  };
  const [data, setData] = useState([]);
  const bringData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "bloghashtag",
      });
      const responseData = await response.items;
      if (responseData.length > 0) {
        setData(responseData);
        console.log("courses", data);
        console.log("courses2", responseData);
      } else {
        data([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  useEffect(() => {
    bringData();
  });
  // let tags = [
  //   "HTML",
  //   "CSS",
  //   "JAVASCRIPT",
  //   "REACT JS",
  //   "NODE JS",
  //   "TAILWIND CSS",
  //   "PYTHON",
  //   "NEXT JS",
  //   "EXPRESS JS",
  //   "Art",
  // ];
  // this function is gotten from our context above
  const removeMenu = () => {
    setDisplay(false);
  };
  const addSearch = (e) => {
    setsearchtoinput(e);
    //console.log(search);
  };
  return (
    <div className="sticky index top-0">
      {num === 1 && (
        <div className="sticky top-0  bg-[#d8383a] flex flex-col w-full h-40 lg:h-full  mt-10 ">
          <div className="ml-auto mr-auto 2xl:w-8/12 relative">
            <input
              onChange={(e) => addSearch(e.target.value)}
              className="pl-12 ml-14 z-50 rounded-tiny focus:outline-none border-gray-300 h-10 mt-4 w-4/6 md:absolute md:right-8 md:w-48 md:top-2 lg:w-3/12 "
              type="search"
              placeholder="   &#xf002; Search articles or topic"
            />

            <div className="flex text-white w-[50vw] mb-4  ml-auto mr-auto  cursor-pointer text-base lg:text-lg m-auto leading-none px-3 py-1 border-none rounded bg-transparent  lg:hidden outline-none focus:outline-none my-2 relative">
              <h4
                onClick={resetDisplay}
                className=" z-50 absolute right left-12 md:left-12 md:top-12 lg:hidden"
              >
                Browse Topic
              </h4>
              <AiOutlineArrowDown
                onClick={resetDisplay}
                className=" z-50 mt-1 ml-1 top-5  absolute left-20 md:left-36 md:top-12 lg:hidden"
              />
            </div>

            {display && (
              <ul className="bg-[#d8383a] md:w-fit z-30  py-4 h-fit w-8/12 mx-auto my-0 md:mx-2 mt-10 sticky s">
                <li
                  onClick={() => {
                    removeMenu();
                    sethashtag("all");
                  }}
                  className=" z-10 border-white mb-2 border-1 p-2 w-fit mx-auto  text-red-700 bg-white text-center"
                >
                  #All
                </li>
                {data?.map((item) => {
                  return (
                    <li
                      onClick={() => {
                        sethashtag(item.fields.tag);
                        removeMenu();
                      }}
                      className="border-white  border-[1px] px-1 py-4 w-fit mx-auto my-2 text-white text-center "
                    >
                      #{item.fields.tag}
                    </li>
                  );
                })}
              </ul>
            )}

            <ul className="hidden lg:flex  mt-4 lg:flex-wrap lg:w-8/12 sticky ml-14">
              <li
                onClick={() => {
                  sethashtag("all");
                }}
                className="border-white cursor-pointer border p-2 w-fit h-fit text-white m-2 text-xs"
              >
                All
              </li>

              {data?.map((item) => {
                return (
                  <li
                    onClick={() => {
                      sethashtag(item.fields.tag);
                    }}
                    className="border-white cursor-pointer border p-2 w-fit text-white m-2 text-xs"
                  >
                    #{item.fields.tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Homemenu;
