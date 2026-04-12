import styles from "./FormError.module.css";

const FormError = ({error}) => {
    if(!error) return null;

    return <p className={styles.error}>{error.message}</p>
}

export default FormError;