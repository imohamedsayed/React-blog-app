import Loading from "./Loading";
import Error from "./Error";

import { useParams } from "react-router-dom";
import useGet from "./useGet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading, error } = useGet("blogs/" + id);

  const [pending, setPending] = useState(false);

  const deleteBlog = async () => {
    setPending(true);
    try {
      const res = await axios.delete("http://localhost:8000/blogs/" + id);

      if (res.status === 200) {
        toast.success("Blog deleted successfully", {
          autoClose: 1000,
        });
        navigate("/");
      } else {
        toast.error("Something went wrong, please try again", {
          autoClose: 1500,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        autoClose: 1000,
      });
    }

    setPending(false);
  };

  return (
    <div className="blog">
      {isLoading && <Loading number={1} />}
      {error && <Error error={error} />}
      {blog && (
        <div className="blog">
          <h4 style={{ color: "#777", marginBottom: "40px" }}>
            .. /blogs/{blog.title}
          </h4>

          <h2 className="title">{blog.title}</h2>
          <p className="author">
            <b>Author: </b>
            {blog.author}
          </p>
          <hr />
          <p className="body">{blog.body}</p>
          {!pending && <button onClick={deleteBlog}>Delete</button>}
          {pending && <button disabled>deleting ....</button>}
        </div>
      )}
    </div>
  );
};

export default Blog;
