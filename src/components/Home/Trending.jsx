import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Trending = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="xl:float-right  mb-10 mr-2 xl:absolute xl:right-0 xl:w-4/12 xl:mt-12 2xl:ml-auto 2xl:mr-auto 2xl:w-4/12">
      <h1 className="ml-4 md:ml-8 lg:ml-12 xl:ml-4 font-bold text-base">
        TRENDING UPDATES
      </h1>

      <hr className=" set-trend h-1 mt-0 mb-4 w-11/12 ml-auto mr-auto 2xl:w-6/12 2xl:ml-0" />
      <div data-aos="flip-left" className="flex mb-10">
        <img
          className="w-28 h-28 ml-4 mr-6 xl:mr-0 md:ml-8 lg:ml-12 xl:ml-4"
          src="https://blog.daba.school/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7kradk14qs4y%2F4C1tR8wh8lN7fxjI1u94wU%2F173e5da2d0eaf643cfd574ff1d32ea0e%2Fistockphoto-1368783405-612x612.jpg%3Ffm%3Djpg&w=2048&q=75"
          alt="images cover images for  a how to make a your first a million"
        />
        <div className="w-6/12 xl:w-fit">
          <h1 className="truncate-trending ml-2 w-fit hover:underline text-lg font-bold leading-7">
            HOW TO MAKE YOUR FIRST MILLION
          </h1>

          <div className="ml-2 lg:w-fit">
            <p className="truncate-trending w-fit font-sm text-[#d8383a]">
              #Art
            </p>
            <p className="text-xs w-fit truncate-trending text-sm font-semi-bold">
              Pubished April 27th, 2022
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" className="flex mb-10">
        <img
          className="w-28 h-28 ml-4 mr-6 xl:mr-0 md:ml-8 lg:ml-12 xl:ml-4"
          src="https://blog.daba.school/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7kradk14qs4y%2F4C1tR8wh8lN7fxjI1u94wU%2F173e5da2d0eaf643cfd574ff1d32ea0e%2Fistockphoto-1368783405-612x612.jpg%3Ffm%3Djpg&w=2048&q=75"
          alt="images cover images for  a how to make a your first a million"
        />
        <div className="w-6/12 xl:w-fit">
          <h1 className="truncate-trending ml-2 w-fit hover:underline text-lg font-bold leading-7">
            HOW TO MAKE YOUR FIRST MILLION
          </h1>

          <div className="ml-2 lg:w-fit">
            <p className="truncate-trending w-fit font-sm text-[#d8383a]">
              #Art
            </p>
            <p className="text-xs w-fit truncate-trending text-sm font-semi-bold">
              Pubished April 27th, 2022
            </p>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" className="flex mb-10">
        <img
          className="w-28 h-28 ml-4 mr-6 xl:mr-0 md:ml-8 lg:ml-12 xl:ml-4"
          src="https://blog.daba.school/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7kradk14qs4y%2F4C1tR8wh8lN7fxjI1u94wU%2F173e5da2d0eaf643cfd574ff1d32ea0e%2Fistockphoto-1368783405-612x612.jpg%3Ffm%3Djpg&w=2048&q=75"
          alt="images cover images for  a how to make a your first a million"
        />
        <div className="w-6/12 xl:w-fit">
          <h1 className="truncate-trending ml-2 w-fit hover:underline text-lg font-bold leading-7">
            HOW TO MAKE YOUR FIRST MILLION
          </h1>

          <div className="ml-2 lg:w-fit">
            <p className="truncate-trending w-fit font-sm text-[#d8383a]">
              #Art
            </p>
            <p className="text-xs w-fit truncate-trending text-sm font-semi-bold">
              Pubished April 27th, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
