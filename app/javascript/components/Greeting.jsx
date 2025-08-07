import React from "react";
import Counter from "./Counter";
import Clock from "./Clock";

export default function Greeting() {
  return (
    <div>
      <h1 suppressHydrationWarning>
        Hello from the server at {new Date().toLocaleTimeString()}
      </h1>
      <Clock />
      <Counter />
    </div>
  );
}
