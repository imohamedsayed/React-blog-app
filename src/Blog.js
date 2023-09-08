import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  return (
    <div className="blog">
      <h1>Blog details : {id}</h1>
    </div>
  );
};

export default Blog;
