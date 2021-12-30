import React from "react";
interface Props {
  onDone: () => void;
}
export default function Header(props: Props) {
  return (
    <div className="flex justify-between text-blue-500 py-4">
      <button className="font-semibold">Clear All</button>
      <button onClick={props.onDone}>Done</button>
    </div>
  );
}
