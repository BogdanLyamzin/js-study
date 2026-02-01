import { useState, useRef } from "react";

import styles from "./CollapseItem.module.css";

const CollapseItem = ({title, text})=> {
    const [open, setOpen] = useState(false);
    const textRef = useRef(null);

    const handleClick = ()=> setOpen(prevOpen => !prevOpen);

    // const height = open ? `${document.querySelector("#text")?.scrollHeight}px` : 0;
    const height = open ? `${textRef.current?.scrollHeight}px` : 0;

    return (
        <div>
            <p onClick={handleClick} className={styles.title}>{title}</p>
            <p ref={textRef} style={{height}}>{text}</p>
        </div>
    )
}

export default CollapseItem;