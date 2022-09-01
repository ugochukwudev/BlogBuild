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
  // importing useState
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);

  // this function brings our cms data
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

  // calling above functon
  useEffect(() => {
    bringData();
  }, []);

  // here, i'm shortening data length to use on changePage
  const shortenData = Math.ceil(data.length / 10);

  // this function runs on pagenav and changes the page
  const changePage = () => {
    if (num === shortenData) {
      setNum((num) => num);
      console.log("limit", num);
      return;
    }
    setNum((num) => num + 1);
  };

  // this returns previous page
  const reducePage = () => {
    if (num === 1) {
      setNum((num) => num);
      console.log("low limit", num);
      return;
    }
    setNum((num) => num - 1);
  };
  return (
    // useContext to make files available globally
    <BlogContent.Provider
      value={{
        data: data,
        changePage,
        num,
        reducePage,
      }}
    >
      <div></div>
      <Routes>
        {/* as the name implies, manages navigation */}
        <Route path="/" element={<Navigation />}>
          {/* homepage */}
          <Route path="/" element={<Home />} />
          {/* about page */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="/login" element={<Login />} />
          {/* this page, manages the blog content by, taking the slug from clicked post and displaying its data */}
          <Route path="/blog/:name" element={<Blog />} />
        </Route>
      </Routes>
    </BlogContent.Provider>
  );
}

export default App;
