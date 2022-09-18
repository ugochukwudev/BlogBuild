import { useContext } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { BlogContent } from "./Home";
import Recommended from "./Recommended";
var scrollTo = require("scroll-to");
const PageNav = () => {
  const { data, changePage, num, reducePage, noSearch } =
    useContext(BlogContent);
  let all = data.length / 10;
  let testData = Math.ceil(all);
  console.log(testData);
  const increment = () => {
    if (num !== testData) {
      console.log(num);
      changePage();
      //window.scrollTo(0, 0);
      scrollTo(0, 0, {
        // ease: "inElastic",
        duration: 500,
      });
    }
  };

  const decrement = () => {
    reducePage();
    //window.scrollTo(0, 0);
    scrollTo(0, 0, {
      // ease: "inElastic",
      duration: 500,
    });
  };

  return (
    <>
      <div>
        {!noSearch && (
          <div className=" flex justify-center mb-10 ">
            {num > 1 && (
              <div className="flex absolute left-8 lg:left-56 mt-px hover:text-[#d8383a] 2xl:left-auto 2xl:mr-96">
                <FaLessThan className="mt-2 font-thin text-sm" />
                <h4
                  onClick={() => decrement()}
                  className="leading-7 px-2  cursor-pointer "
                >
                  Prev
                </h4>
              </div>
            )}
            <div className="">
              <h4 className="leading-7">
                {" "}
                Page {num} of {Math.ceil(all)}{" "}
              </h4>
              <hr className="h-1 w-22 bg-[#d8383a]" />
            </div>
            <div className="flex absolute right-8 lg:right-56 mt-px hover:text-[#d8383a] 2xl:right-auto 2xl:ml-96">
              <h4
                onClick={() => increment()}
                className="leading-7 px-2  cursor-pointer"
              >
                {" "}
                Next
              </h4>
              <FaGreaterThan className="mt-2 font-thin text-sm" />
            </div>
          </div>
        )}
        <Recommended />
      </div>
    </>
  );
};

export default PageNav;
