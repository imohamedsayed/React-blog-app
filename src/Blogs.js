import { useState } from "react";

const Blogs = () => {
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

  return (
    <div className="blog">
      <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>Blogs</h2>
      <hr />

      {blogs.map((blog) => (
        <div className="blog-prev">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
