import React from "react";
import Counter from "./Counter.client";

export default function Greeting() {
  return (
    <div>
      <h1>Hello from the server at {new Date().toLocaleTimeString()}</h1>
      <Counter />
    </div>
  );
}
