import React from "react";
import cn from "classnames";
import s from "./Button.module.css";
interface Props {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "link" | "ghost";
  onClick?: () => void;
  icon?: React.ReactElement;
}
function Button(props: Props) {
  const { title, variant, onClick, icon } = props;
  return (
    <button onClick={onClick}>
      {icon}
      {title}
    </button>
  );
}

export default Button;
