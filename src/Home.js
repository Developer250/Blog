import BlogList from "./BlogList";
import useFetch from "./useFetch";

//Fetching the data
const Home = () => {
  const {
    error,
    isLoading,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      <div className="title-home">Title</div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
