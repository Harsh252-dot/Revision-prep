export default function TaskItem({
  task,
  index,
  total,
  onMoveUp,
  onMoveDown
}) {
  return (
    <li className="task">
      <span className="position">{index + 1}.</span>
      <span className="title">{task.title}</span>

      <div className="actions">
        <button
          onClick={() => onMoveUp(index)}
          disabled={index === 0}
        >
          ⬆️
        </button>

        <button
          onClick={() => onMoveDown(index)}
          disabled={index === total - 1}
        >
          ⬇️
        </button>
      </div>
    </li>
  );
}
