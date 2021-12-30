import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between text-blue-500 py-4">
      <button className="font-semibold">Clear All</button>
      <button>Done</button>
    </div>
  );
}
