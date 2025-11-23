import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 't1', text: 'Learn React basics' },
    { id: 't2', text: 'Build a To-Do app' }
  ]);

  function addTodo() {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,8), text: trimmed };
    setTodos(t => [newTodo, ...t]);
    setText('');
  }

  function deleteTodo(id) {
    setTodos(t => t.filter(x => x.id !== id));
  }

  return (
    <div style={{display:'grid',gap:12}}>
      <div className="card">
        <h2 style={{marginTop:0}}>Your Tasks</h2>
        <div className="small-muted">Manage your tasks quickly</div>

        <div style={{marginTop:12}}>
          <TodoInput value={text} onChange={setText} onAdd={addTodo} disabled={!text.trim()} />
        </div>

        <div style={{marginTop:12}}>
          {todos.length === 0 ? (
            <div className="empty">No todos yet — add your first task.</div>
          ) : (
            <ul className="todo-list" role="list">
              {todos.map(item => (
                <li key={item.id}><TodoItem item={item} onDelete={deleteTodo} /></li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="card">
        <h3 style={{marginTop:0}}>Overview</h3>
        <div className="small-muted">Total tasks: <strong>{todos.length}</strong></div>
        <div style={{marginTop:12}}>
          <button className="btn" onClick={() => alert('Feature: Sync not implemented')}>Sync</button>
          <button className="btn ghost" style={{marginLeft:8}} onClick={() => setTodos([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
}
