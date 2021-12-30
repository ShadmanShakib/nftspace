import React from "react";

interface Props {
  onClick?: () => void;
}
function FilterButton(props: Props) {
  return (
    <div className="fixed z-40 bottom-5 flex w-full items-center justify-center">
      <button
        onClick={props.onClick}
        className="py-2 px-20 rounded-3xl bg-blue-600 text-white font-semibold "
      >
        Filter
      </button>
    </div>
  );
}

export default FilterButton;
