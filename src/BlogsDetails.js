import { useParams } from "react-router-dom";

const blogsDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
    </div>
  );
};

export default blogsDetails;
