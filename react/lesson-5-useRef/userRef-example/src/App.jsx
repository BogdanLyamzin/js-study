import { useState } from "react";

import CollapseItem from "./components/CollapseItem/CollapseItem";
import Modal from "./components/Modal/Modal";
import Timer from "./components/Timer/Timer";

import styles from "./App.module.css";

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae soluta perspiciatis deserunt optio quae reiciendis sunt voluptas, eveniet odio eos id ea ipsum officiis nam, quaerat accusantium nesciunt, dolores modi!;";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalToggle = () => setModalOpen((prevOpen) => !prevOpen);

  return (
    <>
      <main className={styles.main}>
        {/* <CollapseItem title="Title" text={text} /> */}
        <button onClick={modalToggle}>Open modal</button>
        <Timer />
        <Modal open={modalOpen} close={modalToggle}>
          <p>Some text</p>
        </Modal>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}

export default App;
