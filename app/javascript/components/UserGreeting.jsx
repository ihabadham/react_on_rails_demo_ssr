import React from "react";

export default function UserGreeting({
  userName = "Guest",
  userRole = "visitor",
}) {
  const greeting =
    userRole === "admin"
      ? `Welcome back, ${userName}! You have admin privileges.`
      : `Hello, ${userName}! Welcome to our SSR demo.`;

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: userRole === "admin" ? "#e3f2fd" : "#f3e5f5",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <h3>{greeting}</h3>
      <p suppressHydrationWarning>
        Your session started at: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
