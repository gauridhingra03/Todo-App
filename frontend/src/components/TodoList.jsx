function TodoList({ todos, filter, toggleComplete, deleteTodo }) {
  const filteredTodos = todos.filter((todo) => {
    const isCompleted =
      todo.completed === true ||
      todo.completed === "true" ||
      todo.completed === 1;

    if (filter === "completed") return isCompleted;
    if (filter === "pending") return !isCompleted;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        {filter === "completed" && "💗 No completed items"}
        {filter === "pending" && "🌷 No pending items"}
        {filter === "all" && (
          <>
            🌸 No tasks yet 🌸
            <br />
            Add something to do✨
          </>
        )}
      </div>
    );
  }

  return (
    <div className="todo-container">
      {filteredTodos.map((todo) => (
        <div
          key={todo._id}
          className={`todo-card ${todo.completed ? "done" : ""}`}
        >
          <div className="todo-left">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo)}
            />
            <span>{todo.title}</span>
          </div>

          <button onClick={() => deleteTodo(todo._id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;