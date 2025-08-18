import Container from "../Container/Container";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className="copyright">Copyright 2025</p>
        <button className={styles.btn}>Policy Privacy</button>
      </Container>
    </footer>
  );
}
