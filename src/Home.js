import BlogList from "./BlogList";
import Loading from "./Loading";
import Error from "./Error";
import useGet from "./useGet";
const Home = () => {
  const { data: blogs, isLoading, error } = useGet("blogs");

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
        <h1>Blogs</h1>
        <input
          type="search"
          name="search"
          placeholder="search by title"
          style={{ height: "30px" }}
          // onKeyUp={(e) => search(e.target.value)}
        />
      </div>
      <hr />
      {error && <Error error={error} />}
      {blogs && <BlogList blogs={blogs} />}
      {isLoading && <Loading />}
    </div>
  );
};

export default Home;
