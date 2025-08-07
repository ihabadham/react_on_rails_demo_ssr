import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>🕐 Current Time: {time}</h2>
    </div>
  );
}
