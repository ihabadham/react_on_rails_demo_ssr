import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme to body
    document.body.style.backgroundColor = isDark ? "#1a1a1a" : "#ffffff";
    document.body.style.color = isDark ? "#ffffff" : "#000000";
  }, [isDark]);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: isDark ? "#333" : "#f8f9fa",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <h3>🎨 Theme Toggle</h3>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: isDark ? "#007bff" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
    </div>
  );
}
