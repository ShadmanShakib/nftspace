import React from "react";
import Image from "next/image";
import s from "./CategoryCard.module.css";
import Link from "next/link";
interface Props {
  name: string;
}
function CategoryCard(props: Props) {
  const { name } = props;
  return (
    <Link href="/collections/id" passHref>
      <div className={s.main}>
        <Image
          className={s.img}
          src="/images/domain-name.png"
          width={350}
          height={200}
          alt="Domain name"
        />
        <div className={s.bottom}>
          <h1 className={s.name}>{name}</h1>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
