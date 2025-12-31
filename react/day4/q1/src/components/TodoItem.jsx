export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)} className="text">
        {todo.text}
      </span>

      <span className={`badge ${todo.priority.toLowerCase()}`}>
        {todo.priority}
      </span>

      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
