import React, { Children } from "react";
import s from "./Button.module.css";
import Link from "next/link";
import cn from "classnames";
interface LinkButtonProps {
  to: string;
  title?: string;
  children?: React.ReactNode;
  varient: "primary" | "secondary" | "tertiary";
}
function LinkButton(props: LinkButtonProps) {
  const { to, title, varient } = props;
  const rootClassNames = cn(s.linkButton, {
    [s.primary]: varient === "primary",
    [s.secondary]: varient === "secondary",
  });
  return (
    <Link href={to} passHref>
      <button className={rootClassNames}>{title}</button>
    </Link>
  );
}

export default LinkButton;
