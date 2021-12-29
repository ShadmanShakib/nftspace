import React, { Children } from "react";
import s from "./Button.module.css";
import Link from "next/link";
import cn from "classnames";
interface LinkButtonProps {
  to: string;
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
    <Link href={to}>
      <a className={rootClassNames} href={to}>
        {children}
      </a>
    </Link>
  );
}

export default LinkButton;
