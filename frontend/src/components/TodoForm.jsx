function TodoForm({ title, setTitle, addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop refresh
    addTodo();
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add your tasks..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;