import { useState } from "react";

//Controlled inputs
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setLoading] = useState(false);

  //Form's submission with page's update prevention when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    //POST request to an endpoint
    setLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "applcation/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        {!isLoading && <button>Add a new blog</button>}
        {isLoading && <button> disabeld Adding a new blog...</button>}
      </form>
    </div>
  );
};

export default Create;
