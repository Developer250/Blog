import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*Käydäänn läpi kaikki listassa olevat blogit/}
            {/ Key atribuuttilla annetaan jokaiselle blogille omat id-numerot, jotta voidaan käydä yksilöllisesti läpi*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
