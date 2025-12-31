import { useState } from "react";
import TaskItem from "./components/TaskItem";

const initialTasks = [
  { id: "1", title: "Design UI" },
  { id: "2", title: "Implement features" },
  { id: "3", title: "Write tests" },
  { id: "4", title: "Deploy app" }
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);


  const swapTasks = (fromIndex, toIndex) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks]; 
      const temp = newTasks[fromIndex];
      newTasks[fromIndex] = newTasks[toIndex];
      newTasks[toIndex] = temp;
      return newTasks;
    });
  };

  const moveUp = (index) => {
    if (index === 0) return;
    swapTasks(index, index - 1);
  };

  const moveDown = (index) => {
    if (index === tasks.length - 1) return;
    swapTasks(index, index + 1);
  };

  return (
    <div className="app">
      <h1>📋 Reorder Task List</h1>

      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}         
            task={task}
            index={index}
            total={tasks.length}
            onMoveUp={moveUp}
            onMoveDown={moveDown}
          />
        ))}
      </ul>
    </div>
  );
}
