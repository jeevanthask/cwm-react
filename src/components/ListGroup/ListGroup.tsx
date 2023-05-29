import React, { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  showItem: () => void;
}

function ListGroup({ items, heading, showItem }: Props) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  if (items.length === 0) {
    return (
      <div>
        <p>no Items found</p>
      </div>
    );
  }

  const handleClick = (item: string, index: number) => {
    console.log(item, index);
    setCurrentIndex(index);
  };

  return (
    <div>
      <p className={[styles.style1, styles.style2].join(" ")}>module styling</p>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              currentIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(item, index);
              showItem();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
