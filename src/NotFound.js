import { Link } from "react-router-dom";
const notFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <Link to="/">BAck tothe home page</Link>
    </div>
  );
};

export default notFound;
