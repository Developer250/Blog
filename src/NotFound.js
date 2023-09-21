import { Link } from "react-router-dom";

//If user types a website that does not exist, then it shows the "page not found" and user can click to the home page
const notFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <Link to="/">Back tothe home page</Link>
    </div>
  );
};

export default notFound;
