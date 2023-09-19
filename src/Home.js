import BlogList from "./BlogList";
import useFetch from "./useFetch";

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
      <img
        src="https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
