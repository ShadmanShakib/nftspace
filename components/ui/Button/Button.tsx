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
  const mainClassNames = cn(s.main, {
    [s.primary]: variant === "primary",
    [s.secondary]: variant === "secondary",
    [s.tertiary]: variant === "tertiary",
    [s.outline]: variant === "outline",
    [s.link]: variant === "link",
    [s.ghost]: variant === "ghost",
  });
  return (
    <button className={mainClassNames} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
}

export default Button;
