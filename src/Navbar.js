import { Link } from "react-router-dom";

//Navbar on the page
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="create">New blog</Link>
      </div>
    </nav>
  );
};
export default Navbar;
