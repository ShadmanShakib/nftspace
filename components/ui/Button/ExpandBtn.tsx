import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import s from "./Button.module.css";
interface Props {
  title: string;
  icon?: React.ReactNode;
}
const ExpandBtn: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { title, children, icon } = props;
  return (
    <div className={s.expandBtn}>
      <button className={s.btn} onClick={toggle}>
        <div className={s.btnLeft}>
          {/* if icon present show icon within a div */}
          {icon && <div className={s.icon}>{icon}</div>}
          <h1 className="font-semibold text-lg">{title}</h1>
        </div>
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
};
export default ExpandBtn;
