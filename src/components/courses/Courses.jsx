import React from "react";

const Courses = () => {
  return (
    <>
      <div className="ml-auto mr-auto mt-10 cursor-pointer  border-2  rounded w-10/12  lg:w-6/12 ">
        <h1 className="text-center text-xl font-bold text-[23px]  mt-10">
          courses for you
        </h1>
        <h3 className=" text-center text-base font-medium">
          {" "}
          Links to important youtube courses and amazing Pdf's will be located
          here. please check from time to time
        </h3>
      </div>
      <div className="ml-auto mr-auto mt-10 cursor-pointer  border-b-2  rounded w-10/12  lg:w-6/12 ">
        <p className="text-[24px]  font-bold ">
          React js complete beginners course
        </p>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=bMknfKXIFA8&t=1s"
          rel="noreferrer"
          className="text-red-600 font-medium"
        >
          visit site
        </a>
      </div>
    </>
  );
};

export default Courses;
