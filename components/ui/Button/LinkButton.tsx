import React from "react";
interface LinkButtonProps {
  href?: string;
  title: string;
}
function LinkButton(props: LinkButtonProps) {
  const { href, title } = props;
  return (
    <a className="" href={href}>
      {title}
    </a>
  );
}

export default LinkButton;
