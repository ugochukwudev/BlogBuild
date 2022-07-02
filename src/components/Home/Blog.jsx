import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Footer from "./Footer";
import { BlogContent } from "./Home";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
var scrollTo = require("scroll-to");

const Blog = () => {
  const { name } = useParams();
  const { data, changeRegister } = useContext(BlogContent);

  const changeView = () => {
    changeRegister();
  };

  useEffect(() => {
    //window.scrollTo(0, 0);
    scrollTo(0, 0, {
      // ease: "inElastic",
      duration: 500,
    });
  }, []);
  //const [newPerson, setNewPerson] = useState([]);

  const newPerson = data.find((person) => person.fields.slug === name);

  //console.log(newPerson);
  const date = newPerson && newPerson.fields.publishedDate;
  var realDate = new Date(date).toDateString();
  console.log(newPerson);
  const rich = newPerson && newPerson.fields.blogContent;

  const Richtext = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        // find the entry in the entryMap by ID
        //const entry = node.data.target.sys.id;
        // console.log("href", node);
        // render the entries as needed

        return (
          <a
            className="text-blue-600"
            target="_blank"
            href={node.data.uri}
            rel="noreferrer"
          >
            {node.content[0].value}
          </a>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <span className="leading-7">{children}</span>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const set = node.data.target.fields.file.url;
        return (
          <img
            className="lg:w-6/12 ml-auto mr-auto md:w-6/12"
            src={set}
            alt="sorry-bro"
          />
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h1 className="text-xl text-center mt-2 mb-2 lg:text-xl leading-7 font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_1]: (node, children) => {
        // console.log(children);
        return (
          <h1 className="text-2xl text-center mt-2 mb-2 lg:text-2xl font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        // console.log(children);
        return (
          <h1 className="text-lg text-center mt-2 mb-2 lg:text-lg font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        // console.log(children);
        return (
          <h1 className="text-base text-center mt-2 mb-2 lg:text-base font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        // console.log(children);
        return (
          <h1 className="text-sm text-center mt-2 mb-2 lg:text-sm font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        // console.log(children);
        return (
          <h1 className="text-xs text-center mt-2 mb-2 lg:text-xs font-bold">
            {children}
          </h1>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }

        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              classNameh-fit
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
    },
  };

  return (
    <div>
      <div className=" h-96 h-coverImgMob md:h-coverImgTab lg:h-coverImg flex items-center justify-center overflow-hidden mb-8 lg:mb-16">
        <img
          className=" w-full 2xl:w-4/12"
          src={newPerson && newPerson.fields.mainImage.fields.file.url}
          alt={newPerson && newPerson.fields.title}
        />
      </div>
      <div className="  lg:text-4xl  text-2xl w-10/12 ml-auto mr-auto 2xl:6-4/12  mt-36">
        <h1 className="text-heading lg:text-heading font-bold mb-9 md:text-3xl ml-4 md:ml-12 lg:ml-20">
          {newPerson && newPerson.fields.title}
        </h1>
        <div className="flex flex-col md:flex-row ml-6 lg:ml-20 2xl:ml-8">
          <div className="flex  ml-">
            <img
              className="w-8 h-8 rounded-full mb-4 mt-3 "
              src={newPerson && newPerson.fields.authorImage.fields.file.url}
              alt="images"
            />

            <div className="mr-4 ">
              <p className="text-xs leading-4 font-bold mt-2 ml-4 ">
                {newPerson && newPerson.fields.authorTitle}
              </p>
              <p className="text-xs text-text mt-1 font-bold text-[#999] ml-4">
                Author
              </p>
            </div>
          </div>
          <div className="flex ">
            <p className="font-semibold text-sm  md:mt-6 mt-1 ">
              {newPerson && newPerson.fields.readTime} min read
            </p>
            <AiOutlineHeart className="md:mt-5 ml-4 w-4 lg:mt-4" />
            <p className="text-xs mt-1 ml-1 md:mt-6 mr-4 ">0 Likes</p>
            <BsReply className=" ml-2 md:mt-5 w-4 lg:mt-4" />
            <p className="text-xs mt-1 ml-1 md:mt-6">0 Replies</p>
          </div>
          <div className="flex mt-4 flex-col md:flex-row md:ml-4 md:mt-6 mb-10">
            <p className="font-semibold text-sm">Published</p>
            <p className="text-xs md:ml-2 mt-1">
              {newPerson && `${realDate.slice(0, 10)}, ${realDate.slice(10)}`}
            </p>
          </div>
        </div>
        <div className="lg:ml-20 ml-6 mb-4 text-sm">
          <div>{documentToReactComponents(rich, Richtext)}</div>
        </div>
        <hr className=" mb-10 w-10/12 ml-auto mr-auto h-0.5 bg-zinc-900" />
        <div>
          <h1 className="uppercase font-bold text-lg ml-auto mr-auto w-fit">
            Share this article
          </h1>
          <div className="flex w-10/12 ml-auto mr-auto relative">
            <div className="flex lg:flex-row flex-col">
              <div className="flex lg:flex-row flex-col">
                <div className="flex m-2 p-2">
                  <BsFacebook className="w-6 mr-2" />
                  <p className="text-base lg:mt-2 font-bold">Facebook</p>
                </div>
                <div className="flex m-2 p-2">
                  <AiFillTwitterCircle className="w-7 mr-2" />
                  <p className="text-base lg:mt-2 font-bold">Twitter</p>
                </div>
                <div className="flex m-2 p-2">
                  <FaWhatsappSquare className="w-6  mr-2 " />
                  <p className="text-base lg:mt-2 font-bold">Whatsaap</p>
                </div>
                <div className="flex m-2 p-2">
                  <BsLinkedin className="w-6 mr-2" />
                  <p className="text-base lg:mt-2 font-bold">Linkedin</p>
                </div>
              </div>
            </div>
            <div className="flex absolute right-0 m-2 p-2 text-red-500 likee">
              <AiOutlineHeart className="w-4 mt-px mr-2 " />
              <p className="text-base lg:mt-2 font-bold ">like (1)</p>
            </div>
          </div>
          <hr className=" mb-10 w-10/12 ml-auto mr-auto h-0.5 bg-zinc-900" />
        </div>
      </div>
      <div>
        <div className="flex w-8/12 ml-auto mr-auto mb-10 flex bg-[#eee]  lg:h-36 items-center p-2">
          <div>
            <h4 className="text-base font-bold ">
              Sign in or create a new account
            </h4>
            <p className="text-base">
              It looks like you aren’t connected to DABA, Click{" "}
              <span className="text-[#0000ff]">here</span> to get connected.
            </p>
          </div>
          <div>
            <img
              className="lg:ml-10  w-36 h-20"
              alt="message-icon"
              src="https://blog.daba.school/_next/image?url=%2Ficons%2Fmessage.svg&w=256&q=75"
            />
          </div>
        </div>
        <div className="flex w-8/12 ml-auto mr-auto">
          <div className="mr-4 mt-2">
            <img
              src="https://blog.daba.school/icons/anonymous.svg"
              alt="profile"
            />
            <p className="text-xs">Anonymous</p>
          </div>
          <input
            onClick={() => changeView()}
            className=" rounded-tiny focus:outline-none border-b-2 border-[#ddd] h-10 mt-4 w-full mb-10"
            type="search"
            placeholder=" Add a comment"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
