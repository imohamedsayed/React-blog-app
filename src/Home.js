import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {
      title: "Node.js",
      body: "Node.js is a run environ...",
      author: "Ahmed",
      id: 1,
    },
    {
      title: "React.js",
      body: "React.js is a javaScript lib...",
      author: "Ali",
      id: 2,
    },
    {
      title: "Vue.js",
      body: "Vue.js is a javaScript frame...",
      author: "Mohamed",
      id: 3,
    },
  ]);

  const [blogs2, setBlogs2] = useState(blogs);

  const search = (key) => {
    const searchResults = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(key.toLowerCase())
    );
    setBlogs2(searchResults);
  };

  const deleteBlog = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs2(filteredBlogs);
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    console.log("blogs changed");
  }, [blogs]);


  useEffect(() => {
    console.log("blogs2 changed");
  }, [blogs2]);


  return (
    <div className="home">
      <h4 style={{ color: "#777" }}>.. /Home</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
          marginTop: "40px",
        }}
      >
        <h2>Blogs</h2>
        <input
          type="search"
          name="search"
          placeholder="search by title"
          style={{ height: "30px" }}
          onKeyUp={(e) => search(e.target.value)}
        />
      </div>
      <hr />
      <BlogList blogs={blogs2} deleteBlog={deleteBlog} />
    </div>
  );
};

export default Home;
