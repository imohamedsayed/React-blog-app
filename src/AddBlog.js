import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const negative = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();

    const blog = {
      title,
      author,
      body,
    };
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/blogs", blog);

      if (res.status === 201) {
        toast.success("blog created successfully", {
          autoClose: 1000,
        });

        negative("/");
      } else {
        toast.error("Something is wrong with your blog", {
          autoClose: 1000,
        });
        console.log(res);
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 1000,
      });
    }

    setLoading(false);
  };

  return (
    <div className="AddBlog">
      <h4 style={{ color: "#777", marginBottom: "40px" }}>.. /blogs/create</h4>
      <form onSubmit={addBlog}>
        <div className="form-field">
          <label>Title</label>
          <input
            type="text"
            placeholder="blog title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Author</label>
          <input
            type="text"
            placeholder="blog author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Body</label>
          <textarea
            placeholder="blog body..."
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="submit">
          {!loading && <button>Create blog</button>}
          {loading && (
            <button disabled style={{ opacity: "0.6" }}>
              Loading ....
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
