import { useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ open, close, children }) => {
  const overlayRef = useRef(null);
  if (!open) return null;

  const closeModal = (e) => {
    if (e.target === overlayRef.current) {
      close();
    }
    // if(e.target === e.currentTarget) {
    //     close()
    // }
  };

  return createPortal(
    <div ref={overlayRef} className={styles.overlay} onClick={closeModal}>
      <div className={styles.content}>
        <span onClick={close} className={styles.close}>
          X
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
