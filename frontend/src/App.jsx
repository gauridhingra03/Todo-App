import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const API = "http://localhost:5000/api/todos";

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    await axios.post(API, {
      title,
      completed: false,
    });

    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`${API}/${todo._id}`, {
      ...todo,
      completed: !todo.completed,
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="layout">
      <header className="header">🎀 Pookie Planner</header>

      <div className="content">
        <aside className="sidebar">
          <h3>🧸 My Planner</h3>

          <p
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            ✨ All Tasks
          </p>

          <p
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            💗 Completed
          </p>

          <p
            className={filter === "pending" ? "active" : ""}
            onClick={() => setFilter("pending")}
          >
            🌷 Pending
          </p>
        </aside>

        <main className="main">
          <TodoForm title={title} setTitle={setTitle} addTodo={addTodo} />

          <TodoList
            todos={todos}
            filter={filter}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;