import React from "react";
import SimpleSlider from "./Set";

const Recommended = () => {
  return (
    <div>
      <div className=" w-10/12 mr-auto ml-auto 2xl:w-4/12">
        <h1 className="font-bold text-lg ml-2">
          Recommended blog posts for you
        </h1>
        <hr className=" set-trend h-1.5 mt-2 mb-4 lg:w-10/12  w-10/12 ml-2" />
      </div>
      <SimpleSlider />
    </div>
  );
};

export default Recommended;
