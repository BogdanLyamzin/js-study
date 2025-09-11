import { useState } from "react";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({ firstText, secondText }) => {
  const [active, setActive] = useState(false);

  const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;
  const text = active ? secondText : firstText;

  const handleClick = () => setActive((prevActive) => !prevActive);

  return (
    <button onClick={handleClick} type="button" className={fullClassName}>
      {text}
    </button>
  );
};

export default ToggleButton;
