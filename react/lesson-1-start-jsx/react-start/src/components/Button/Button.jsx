import styles from "./Button.module.css";

const Button = ({active = false, type = "button", children})=> {
    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button type={type} className={fullClassName}>{children}</button>
}

export default Button;