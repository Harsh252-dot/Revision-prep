import { useState } from "react";
import TodoItem from "./components/TodoItem";

const initialTodos = [
  { id: "1", text: "Complete React project", priority: "High", completed: false },
  { id: "2", text: "Review PRs", priority: "Medium", completed: true },
  { id: "3", text: "Update documentation", priority: "Low", completed: false }
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(), 
        text,
        priority,
        completed: false
      }
    ]);

    setText("");
    setPriority("Low");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Todo List with Priorities</h1>

      <div className="add-todo">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo..."
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}       
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
