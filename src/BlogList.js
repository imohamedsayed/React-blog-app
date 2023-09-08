import { Link } from "react-router-dom";
const BlogList = (props) => {
  const { blogs } = props;

  return (
    <div className="BlogList">
      {blogs.map((blog) => (
        <div className="blog-prev" key={blog.id}>
          <Link to={"/blogs/" + blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
