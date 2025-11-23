import React from 'react';
import TodoApp from './components/TodoApp';

export default function App(){
  return (
    <div className="app-shell">
      <header className="header">
        <div className="brand">
          <div className="logo">TD</div>
          <div>
            <h1>Simple To-Do</h1>
            <div className="small-muted">Functional components • useState • Clean UI</div>
          </div>
        </div>
        <div>
          <button className="btn ghost" onClick={() => window.location.reload()}>Reload</button>
        </div>
      </header>

      <main className="todo-layout">
        <TodoApp />

        <aside style={{display:'grid',gap:12}}>
          <div className="card">
            <h3 style={{marginTop:0}}>Tips</h3>
            <div className="small-muted">Use Enter to add a todo. Click Delete to remove an item.</div>
          </div>

          <div className="card">
            <h3 style={{marginTop:0}}>Extras</h3>
            <div className="small-muted">I can add localStorage persistence, edit, and complete features — tell me which one you want next.</div>
          </div>
        </aside>
      </main>

      <footer>Made for practice — paste into your React project and run with <code>npm start</code></footer>
    </div>
  );
}
