import { useState } from "react";

import styles from "./Menu.module.css";

import menuItems from "./menuItems";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, idx)=> {
    e.preventDefault();
    setActiveIndex(idx);
  }

  const elements = menuItems.map(({ id, href, text }, index) => {
    const fullClassName = index === activeIndex
      ? `${styles.link} ${styles.active}`
      : styles.link;

    return (
      <li key={id}>
        <a href={href} className={fullClassName} onClick={(e)=> handleClick(e, index)}>
          {text}
        </a>
      </li>
    );
  });

  return <ul className={styles.menu}>{elements}</ul>;
};

export default Menu;
