import React from "react";

export default function TodoItem({ item, onDelete }) {
  return (
    <div className="todo-item" role="listitem">
      <div className="todo-text">{item.text}</div>
      <div className="todo-actions">
        <button className="btn ghost" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}
