const Create = () => {
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label>Title</label>
        <input type="text" required />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
