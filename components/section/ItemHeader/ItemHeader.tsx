import React from "react";
import s from "./ItemHeader.module.css";
import { VarifiedIcon } from "@components/icons";
import { BiRevision } from "react-icons/bi";
import { FiMoreVertical, FiShare2 } from "react-icons/fi";
import { MdLaunch } from "react-icons/md";
interface Props {
  creator: string;
  name: string;
}
function ItemHeader(props: Props) {
  const { creator, name } = props;
  return (
    <div className={s.main}>
      <div className={s.btnSection}>
        <div className={s.authorSection}>
          <h1 className={s.author}>{creator}</h1>
          <VarifiedIcon className={s.icon} />
        </div>
        <div className={s.btnGroup}>
          <button className={s.btn}>
            <BiRevision size={20} />
          </button>
          <button className={s.btn}>
            <MdLaunch size={20} />
          </button>
          <button className={s.btn}>
            <FiShare2 size={20} />
          </button>
          <button className={s.btnLast}>
            <FiMoreVertical size={20} />
          </button>
        </div>
      </div>
      {/* name of the item */}
      <h1 className={s.title}>{name}</h1>
    </div>
  );
}

export default ItemHeader;
