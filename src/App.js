import "./App.css";
import Navigation from "./components/navs/navigation";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import About from "./components/About us/About";
import Contact from "./components/contact us/contactUs";
import Courses from "./components/courses/Courses";
import SuccessStories from "./components/success stories/SuccessStories";
import Login from "./components/login/Login";
import Blog from "./components/Home/Blog";
import { BlogContent } from "./components/Home/Home";
import { useCallback, useState, useEffect } from "react";
import { client } from "./components/Home/BlogData";
function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [displayRegister, setDisplayRegister] = useState(false);

  const changeRegister = () => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (!items) {
      setDisplayRegister((previous) => !previous);
    } else {
      setDisplayRegister(false);
    }
  };

  const setDisplayToFalse = () => {
    setDisplayRegister(false);
  };

  const [displaySignin, setDisplaySignin] = useState(false);

  const changeSignin = () => {
    setDisplaySignin((previous) => !previous);
  };
  const bringData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "blog",
      });
      const responseData = await response.items;
      if (responseData) {
        setData(responseData);
        console.log(responseData);
      } else {
        data([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      bringData();
    };
  }, []);
  const shortenData = Math.ceil(data.length / 10);
  const changePage = () => {
    if (num === shortenData) {
      setNum((num) => num);
      console.log("limit", num);
      return;
    }
    setNum((num) => num + 1);
  };
  const reducePage = () => {
    if (num === 1) {
      setNum((num) => num);
      console.log("low limit", num);
      return;
    }
    setNum((num) => num - 1);
  };
  return (
    <BlogContent.Provider
      value={{
        data: data,
        changePage,
        num,
        reducePage,
        displayRegister,
        changeRegister,
        displaySignin,
        changeSignin,
        setDisplayToFalse,
      }}
    >
      <div></div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:name" element={<Blog />} />
        </Route>
      </Routes>
    </BlogContent.Provider>
  );
}

export default App;
