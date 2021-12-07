import React, { Children } from "react";
import s from "./Button.module.css";
import cn from "classnames";
interface LinkButtonProps {
  to?: string;
  children?: React.ReactNode;
  varient: "primary" | "secondary" | "tertiary";
}
function LinkButton(props: LinkButtonProps) {
  const { to, children, varient } = props;
  const rootClassNames = cn(s.root, {
    [s.primary]: varient === "primary",
    [s.secondary]: varient === "secondary",
  });
  return (
    <a className={rootClassNames} href={to}>
      {children}
    </a>
  );
}

export default LinkButton;
