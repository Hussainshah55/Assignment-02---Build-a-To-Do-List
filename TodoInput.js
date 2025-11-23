import React from "react";

export default function TodoInput({ value, onChange, onAdd, disabled }) {
  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onAdd(); }}
        aria-label="New todo"
      />
      <button onClick={onAdd} disabled={disabled} className="btn">{disabled ? 'Add' : 'Add'}</button>
    </div>
  );
}
