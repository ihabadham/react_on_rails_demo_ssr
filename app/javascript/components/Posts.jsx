import React from "react";

export default function Posts({ posts = [] }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "2rem",
      }}
    >
      <h3>📰 Posts (Server-Side Rendered)</h3>
      <p>
        <em>This content is rendered on the server with data from the API</em>
      </p>

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "1rem",
                margin: "0.5rem 0",
                backgroundColor: "white",
              }}
            >
              <h4>{post.title}</h4>
              <p>
                <strong>Author:</strong> {post.author}
              </p>
              <p>
                <strong>Date:</strong> {post.created_at}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
