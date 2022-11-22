import { useContext } from "react";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./data";
import { BlogContent } from "./Home";
import { Link } from "react-router-dom";
export default function SimpleSlider() {
  const { data } = useContext(BlogContent);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#00000080",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          marginRight: "15%",
          padding: "15px 15px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#00000080",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          marginLeft: "15%",
          padding: "15px 15px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider
        {...settings}
        className="w-10/12  mb-10 ml-auto mr-auto  2xl:w-8/12"
      >
        {data.map((item) => {
          return (
            <ul className="sliding h-[100%]" key={item}>
              <li
                key={item.id}
                className=" m-2 h-fit border-2 border-[#F5F5F5] rounded-lg relative"
              >
                <div className="flex h-3/6 w-11/12 ml-3 mt-4">
                  <img
                    className="w-full h-3/6"
                    src={item?.fields.mainImage.fields.file.url}
                    alt="deee"
                  />
                </div>
                <div className="h-3/6 ml-3">
                  <Link to={`/blog/${item?.fields.slug}`}>
                    <h1 className="font-bold text-base leading-7 mt-2 mb-10">
                      {item?.fields.title}
                    </h1>
                  </Link>
                  <div>
                    <div className="flex">
                      <svg className="mt-1" width="12" height="12" fill="none">
                        <path
                          d="M10 10.5v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v1M6 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                          stroke="#828282"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="ml-2 text-sm text-[#828282]">
                        {item?.fields.authorTitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <svg className="mt-1" width="12" height="12" fill="none">
                      <g clipPath="url(#a)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.744 1.5H6.669l-.26.113-.481.48-.482-.48-.26-.113H1.112l-.37.375v7.5l.37.375h3.92l.637.637h.519l.637-.637h3.92l.37-.375v-7.5l-.37-.375ZM5.557 9.24l-.133-.127L5.187 9H1.482V2.25h3.55l.547.555-.022 6.435ZM10.373 9H6.67l-.26.113-.103.097V2.775l.518-.525h3.55V9ZM4.447 3.75H2.223v.75h2.223v-.75Zm0 3H2.223v.75h2.223v-.75Zm-2.223-1.5h2.223V6H2.223v-.75Zm7.41-1.5H7.41v.75h2.223v-.75ZM7.41 5.25h2.223V6H7.41v-.75Zm0 1.5h2.223v.75H7.41v-.75Z"
                          fill="#828282"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h11.855v12H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-2 text-sm text-[#828282]">lesson</p>

                    <div className="flex  right-4 absolute">
                      <svg
                        className="mt-1"
                        width="12"
                        height="12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.788.06a.79.79 0 0 0-.716-.46.79.79 0 0 0-.715.46l-1.53 3.3-3.407.527a.793.793 0 0 0-.63.537.807.807 0 0 0 .184.812l2.488 2.581-.59 3.654a.804.804 0 0 0 .326.783.783.783 0 0 0 .837.046l3.037-1.7 3.037 1.7c.265.148.59.13.838-.046a.804.804 0 0 0 .325-.783l-.59-3.654 2.488-2.58a.807.807 0 0 0 .184-.813.793.793 0 0 0-.63-.537L8.318 3.36 6.788.06Z"
                          fill="#FED843"
                        ></path>
                      </svg>
                      <p className="ml-2 text-sm text-[#828282]">4.5</p>
                    </div>
                  </div>
                  <p className="text-[#0BB68F] font-bold text-sm mt-2 mb-4">
                    Approved
                  </p>
                </div>
              </li>
            </ul>
          );
        })}
      </Slider>
      <Footer />
    </div>
  );
}
