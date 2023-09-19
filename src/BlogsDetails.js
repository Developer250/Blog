import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const blogsDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isLoading && <div> Loading...</div>}
      {error && <div>{error}...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title} </h2>
          <h2>{blogs.title} </h2>
          <p>written by{blogs.author} </p>
          <div>{blogs.body} </div>
          <button onClick={handleClick}> delete </button>
        </article>
      )}
    </div>
  );
};

export default blogsDetails;
