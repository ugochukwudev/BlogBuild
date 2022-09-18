import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import FirstPost from "./FirstPost";
import Homemenu from "./Homemenu";
import Main from "./Main";
const BlogContent = createContext(["uuu"]);
export { BlogContent };
export const Home = () => {
  const { data } = useContext(BlogContent);
  console.log("op", data);

  return (
    <>
      {data.length < 1 && (
        <img
          alt="loading"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          className="w-6/12 h-[50%] ml-auto mr-auto  bg-black"
        />
      )}
      {data.length > 1 && <FirstPost />}
      {data.length > 1 && <Homemenu />}
      {data.length > 1 && <Main />}
      <Outlet />
    </>
  );
};
