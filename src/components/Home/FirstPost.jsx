import { useContext, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BlogContent } from "./Home";
import AOS from "aos";
import "aos/dist/aos.css";
const FirstPost = () => {
  const { data, num } = useContext(BlogContent);
  const select = Math.floor(Math.random() * data.length - 1);
  const post = data[select];
  const date = post && post.fields.publishedDate;
  var realDate = new Date(date).toDateString();

  // this useEffect calls an importet npm package that animates our page. package name is aos library
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // this picks a particular data and displays it as the first content.
  return (
    <div className=" flex h-auto relative w-fit ml-auto mr-auto 2xl:w-8/12">
      {num === 1 && (
        <div
          data-aos="fade-right"
          className=" bg-slate-100 relative mt-10 ml-2 md:w-6/12 "
        >
          <p className="text-xs leading-4 font-medium ml-4 mt-2 lg:ml-20 lg:mt-20">
            {post && post.fields.readTime} min read
          </p>
          <Link to={`/blog/${post && post.fields.slug}`}>
            <h1 className=" ml-4 mr-4 text-2xl my-3 leading-heading  font-bold lg:ml-20 lg:text-3xl">
              {post && post.fields.title}
            </h1>
          </Link>

          <p className="ml-4 mr-2 text-xl leading-7 mb-4 text-text truncate-post-body lg:ml-20 lg:mr-10">
            {post && post.fields.description}
          </p>
          <div className="flex flex-row relative h-auto ">
            <img
              className="h-8 w-8 rounded-full mx-2 mb-4 lg:mt-14 set-name lg:ml-20"
              src={post && post.fields.authorImage.fields.file.url}
              alt={post && post.fields.title}
            />
            <p className="text-xs pr-4 leading-4 font-bold lg:mt-16 mr-6 set-name ">
              {post && post.fields.authorTitle}
            </p>
            <h5 className="mt-3 pl-4 whitespace-nowrap float-right leading-4 font-semibold text-sm absolute right-4 lg:mt-16 set-fold lg:mr-10 ">
              published date:{" "}
              {post && `${realDate.slice(0, 10)}, ${realDate.slice(10)}`}
            </h5>
          </div>
          <Link to={`/blog/${post && post.fields.slug}`}>
            <div className="flex hover:underline text-primary  items-center whitespace-nowrap relative bottom-2 lg:bottom:6 text-red-700 font-semibold text-sm">
              <h5 className=" mb-2 absolute right-6 font-semibold text-sm lg:mr-6">
                Read the article
              </h5>
              <AiOutlineRight className="mt-1 absolute mb-2 right-3 font-semibold text-sm lg:mr-6" />
            </div>
          </Link>
        </div>
      )}

      {num === 1 && (
        <img
          data-aos="zoom-in"
          className="  hidden md:block md:w-6/12 md:right-0 md:mt-10  "
          src={post && post.fields.mainImage.fields.file.url}
          alt="idescription"
        />
      )}
    </div>
  );
};

export default FirstPost;
