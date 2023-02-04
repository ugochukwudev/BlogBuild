import React from "react";
import { client } from "../Home/BlogData";
import { useCallback, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  const [data, setData] = useState([]);
  const bringData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "courses",
      });
      const responseData = await response.items;
      if (responseData.length > 0) {
        setData(responseData);
        console.log("courses", data);
        console.log("courses2", responseData);
      }
      // else {
      //   data([]);
      // }
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  useEffect(() => {
    bringData();
  });
  return (
    <>
      <Helmet>
        <title> TechX Free Courses</title>
        <meta
          name="description"
          content="here, we post courses that will help you upgrade your skills and become better at what you do for free..."
        />
        <link rel="canonical" href="/courses" />
      </Helmet>
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
      {data?.map((item) => {
        return (
          <div className="ml-auto mr-auto mt-10 cursor-pointer mb-10  border-b-2  rounded w-10/12  lg:w-6/12 ">
            <p className="text-[24px]  font-bold ">{item.fields.title}</p>
            <a
              target="_blank"
              href={item.fields.link}
              rel="noreferrer"
              className="text-red-600 font-medium"
            >
              visit site
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
