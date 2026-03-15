import React from "react";

function Todo({ task, index, deleteTask, toggleComplete }) {

  return (
    <div className="todo">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}
        onClick={() => toggleComplete(index)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default Todo;
