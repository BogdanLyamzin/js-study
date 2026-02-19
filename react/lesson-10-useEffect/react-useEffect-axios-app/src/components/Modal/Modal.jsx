import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, children }) => {
  useEffect(() => {
    const closeModal = (event) => {
      if(event.code === "Escape") {
        console.log(event.code);
        close();
      }
    };

    document.addEventListener("keydown", closeModal);
    
    return ()=> document.removeEventListener("keydown", closeModal);
  }, [close]);

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.content}>
        <span className={styles.close} onClick={close}>
          x
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
