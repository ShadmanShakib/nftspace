import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
interface Props {
  title: string;
  children: React.ReactNode;
}
export default function FilterDropDown(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { title, children } = props;
  return (
    <div className="">
      <button
        className="flex items-center py-5 px-3  text-white  w-full justify-between"
        onClick={toggle}
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        {isOpen ? ( // if isOpen is true then show the chevron up
          <BsChevronUp className="text-white" />
        ) : (
          // if isOpen is false then show the chevron down
          <BsChevronDown className="text-white" />
        )}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
