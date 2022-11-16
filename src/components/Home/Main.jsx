import { useContext, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import Trending from "./Trending";
//import { Data } from "./data";
import PageNav from "./PageNav";
import { Link } from "react-router-dom";
import { BlogContent } from "./Home";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  const { data, num, search, shownosearch, hidenosearch, noSearch, tag } =
    useContext(BlogContent);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  console.log(search);
  let firstSlice = num * 10;
  let secondSlice = firstSlice - 10;
  let searchword = data.filter(
    (post) =>
      post.fields.topics?.toLowerCase().includes(tag.toLowerCase()) &&
      post.fields.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchword);

  !searchword.length < 1 ? shownosearch() : hidenosearch();

  let main = data && searchword.slice(secondSlice, firstSlice);
  return (
    <div className="lg:flex flex flex-col z-0">
      {noSearch && (
        <p className="text-red-700 text-center text-bold font-medium mt-5 mb-5">
          No such content found in this blog. Please, clear search bar and
          select all{" "}
        </p>
      )}
      {main.map((item, index) => {
        return (
          <div
            className=" md:flex mb-10 ml-auto mr-auto w-full 2xl:w-6/12"
            key={index}
          >
            <img
              data-aos="fade-right"
              className="w-11/12 ml-auto mr-auto mt-10 mb-4 rounded-md md:w-1/4 lg:w-1/4 md:ml-16  md:mr-0 2xl:ml-[0] 2xl:w-4/12"
              src={main && item.fields.mainImage.fields.file.url}
              alt={main && item.fields.title}
            />
            <span
              data-aos="zoom-in"
              className="md:flex w-6/12 md:flex-col xl:w-5/12 2xl:w-5/12"
            >
              <span className="flex md:mt-10 ">
                <h4 className="text-sm ml-4 text-red-700  mt-1 w-min">
                  {main && `${item.fields.topics ? item.fields.topics : ""}`}
                </h4>
                <svg
                  className="bg-green-900 mt-3 rounded-full ml-3 md:mt-3 "
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  {/* <circle cx="4" cy="4" r="4" fill="#476072"></circle> */}
                </svg>
                <h4 className=" text-sm bottom-1 rights leading-7 w-fit ml-1 ">
                  {main && item.fields.readTime} min read
                </h4>
                <AiOutlineHeart className="mt-2 ml-2" />
                <p className="mt-1.5 ml-1 text-sm ">
                  <span className="font-bold">0</span> Likes
                </p>
                <BsReply className=" ml-1 mt-2" />
                <p className="text-sm mt-1.5 ml-3">
                  <span className="font-bold">0</span> Replies
                </p>
              </span>
              <span className="flex flex-col">
                <Link to={`/blog/${main && item.fields.slug}`}>
                  <h1 className="ml-4 mr-2 mb-3 leading-snug text-black font-bold text-xl xl:w-10/12">
                    {main && item.fields.title}
                  </h1>
                </Link>
                <p className=" ml-4 mr-4 mb-2 text-[#476072] text-base leading-6 text-text truncate-post-body xl:w-10/12 w-10/12">
                  {main && item.fields.description}
                </p>
                <span className="flex">
                  <img
                    className="rounded-full w-8 ml-4"
                    src={main && item.fields.authorImage.fields.file.url}
                    alt="img"
                  />
                  <p className="text-xs leading-4 font-bold mt-1 ml-2">
                    {main && item.fields.authorTitle}
                  </p>
                  <svg
                    className="bg-green-900 mt-2 rounded-full ml-2 md:mt-2"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#FFC6C1"></circle>
                  </svg>
                  <p className="ml-2 text-sm">
                    Published{" "}
                    {main &&
                      `${new Date(item.fields.publishedDate)
                        .toDateString()
                        .slice(0, 10)}, ${new Date(item.fields.publishedDate)
                        .toDateString()
                        .slice(10)}`}
                  </p>
                </span>
              </span>
            </span>
          </div>
        );
      })}
      <Trending />
      <PageNav />
    </div>
  );
};

export default Main;
