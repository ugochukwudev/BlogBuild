import { createContext } from "react";
import { Outlet } from "react-router-dom";
import FirstPost from "./FirstPost";
import Homemenu from "./Homemenu";
import Main from "./Main";

export const Home = () => {
  return (
    <>
      <FirstPost />
      <Homemenu />
      <Main />
      <Outlet />
    </>
  );
};
const BlogContent = createContext(["uuu"]);
export { BlogContent };
