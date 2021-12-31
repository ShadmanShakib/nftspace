import React from "react";
interface Props {
  onDone: () => void;
}
export default function Header(props: Props) {
  return (
    <div className="flex px-3 justify-between text-blue-500 py-4 border-b-[1px] border-gray-900">
      <button className="font-semibold">Clear All</button>
      <button className="font-semibold" onClick={props.onDone}>
        Done
      </button>
    </div>
  );
}
