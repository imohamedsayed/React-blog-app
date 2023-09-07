const BlogList = (props) => {
  const { blogs, deleteBlog } = props;

  return (
    <div className="BlogList">
      {blogs.map((blog) => (
        <div className="blog-prev" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button
            style={{ marginTop: "5px", cursor: "pointer" }}
            onClick={() => deleteBlog(blog.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
