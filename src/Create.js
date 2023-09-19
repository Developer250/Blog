import { useState } from "react";
import { useHistory } from "react-router-dom";

//Controlled inputs
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const history = useHistory();

  //Form's submission with page's update prevention when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    //POST request to an endpoint

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };

  //User can create a new blog
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
        <select
          className="select-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        <button>Add a new blog</button>
      </form>
    </div>
  );
};

export default Create;
