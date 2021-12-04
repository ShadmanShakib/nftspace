import React from "react";

export default function CloseIcon({ ...props }) {
  return (
    <svg
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M4 4L20 20M20 4L4 20"
      />
    </svg>
  );
}
