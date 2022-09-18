import { useEffect, useContext } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { BlogContent } from "./Home";

const Trending = () => {
  const { data, noSearch } = useContext(BlogContent);
  let trends = data.slice(0, 3);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {!noSearch && (
        <div className="xl:float-right  mb-10 mr-2 xl:absolute xl:right-0 xl:w-4/12 xl:mt-12 2xl:ml-auto 2xl:mr-auto 2xl:w-4/12">
          <h1 className="ml-4 md:ml-8 lg:ml-12 xl:ml-4 font-bold text-base">
            TRENDING UPDATES
          </h1>

          <hr className=" set-trend h-1 mt-0 mb-4 w-11/12 ml-auto mr-auto 2xl:w-6/12 2xl:ml-0" />
          {trends.map((post) => {
            return (
              <div data-aos="flip-left" className="flex mb-10">
                <img
                  className="w-28 h-28 ml-4 mr-6 xl:mr-0 md:ml-8 lg:ml-12 xl:ml-4"
                  src={post && post.fields.mainImage.fields.file.url}
                  alt="images cover "
                />
                <div className="w-6/12 xl:w-fit">
                  <Link to={`/blog/${post && post.fields.slug}`}>
                    <h1 className="truncate-trending ml-2 w-fit hover:underline text-lg font-bold leading-7">
                      {post && post.fields.title}
                    </h1>
                  </Link>
                  <div className="ml-2 lg:w-fit">
                    <p className="truncate-trending w-fit font-sm text-[#d8383a]">
                      {post &&
                        `#${post.fields.topics ? post.fields.topics : ""}`}
                    </p>

                    <p className="text-xs w-fit truncate-trending  font-semi-bold">
                      Published{" "}
                      {post &&
                        `${new Date(post.fields.publishedDate)
                          .toDateString()
                          .slice(0, 10)}, ${new Date(post.fields.publishedDate)
                          .toDateString()
                          .slice(10)}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Trending;
