const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/*K�yd��n l�pi kaikki listassa olevat blogit/}
            {/ Key atribuuttilla annetaan jokaiselle blogille omat id-numerot, jotta voidaan k�ud� yksil�llisesti l�pi*/}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p> Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
