import React from "react";

const About = () => {
  return (
    <div className="ml-auto mr-auto mt-10 cursor-pointer  border-2  rounded w-10/12  md:w-6/12 ">
      <h1 className="text-center text-xl font-bold text-[23px]  mt-10">
        About Us
      </h1>
      <h3 className=" text-center text-base font-medium leading-6">
        {" "}
        We're a group of techies with passion for problem solving and teaching .
        After much consideration, we decided it's high time we create a blog and
        help both newbies and intermediates with tips which have helped us or
        have helped others. Note every blog post here was tested and your
        questions will be replied as soon as possible.
      </h3>
    </div>
  );
};

export default About;
