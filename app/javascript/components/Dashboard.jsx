import React from "react";
import Clock from "./Clock";
import Counter from "./Counter";
import TodoList from "./TodoList";
import ThemeToggle from "./ThemeToggle";
import Posts from "./Posts";

export default function Dashboard({
  userData = {},
  posts = [],
  serverTime,
  serverDate,
}) {
  const { userName = "Guest", userRole = "visitor" } = userData;

  // Initial todos from server (could come from database)
  const initialTodos = [
    { id: 1, text: "Understand SSR basics", completed: true },
    { id: 2, text: "Build SSR application", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        🚀 React SSR Demo Dashboard
      </h1>

      {/* Server-rendered content */}
      <div
        style={{
          backgroundColor: "#e8f5e8",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h3>🖥️ Server-Side Rendered Content</h3>
        <p>
          <strong>Server Time:</strong> {serverTime}
        </p>
        <p>
          <strong>Server Date:</strong> {serverDate}
        </p>
        <p>
          <strong>User:</strong> {userName} ({userRole})
        </p>
      </div>

      {/* Posts with server-side data */}
      <Posts posts={posts} />

      {/* Client-side interactive components */}
      <div
        style={{
          backgroundColor: "#f0f8ff",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h3>⚡ Client-Side Interactive Components</h3>
        <Clock />
        <Counter />
      </div>

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Todo list with initial server data */}
      <div
        style={{
          backgroundColor: "#fff3cd",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h3>📋 Todo List (SSR + Client Hydration)</h3>
        <p>
          <em>
            Initial todos loaded from server, then client takes over for
            interactivity
          </em>
        </p>
        <TodoList initialTodos={initialTodos} />
      </div>

      {/* SSR Benefits Explanation */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h3>💡 SSR Benefits Demonstrated</h3>
        <ul>
          <li>
            <strong>Fast Initial Load:</strong> Server renders HTML immediately
          </li>
          <li>
            <strong>SEO Friendly:</strong> Search engines see complete content
          </li>
          <li>
            <strong>Progressive Enhancement:</strong> Works without JavaScript,
            then enhances
          </li>
          <li>
            <strong>Interactive:</strong> Client-side components handle user
            interactions
          </li>
        </ul>
      </div>
    </div>
  );
}
