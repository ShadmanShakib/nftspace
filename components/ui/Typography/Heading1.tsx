import React from "react";
interface Props {
  title: string;
}
import s from "./Typograhpy.module.css";
export default function Heading1(props: Props): JSX.Element {
  const { title } = props;
  return <h1 className={s.heading1}>{title}</h1>;
}
