import { useState } from "react";

import MyPurchases from "../MyPurchases/MyPurchases";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleShowTimer = ()=> setShowTimer(prevState => !prevState);
  const toggleModal = ()=> setShowModal(prevState => !prevState);
  
  return (
    <>
    {/* <MyPurchases /> */}
    {/* <button onClick={toggleShowTimer}>Toggle timer</button>
    {showTimer && <Timer />} */}
    <button onClick={toggleModal}>Show modal</button>
    {showModal && (
      <Modal close={()=> setShowModal(false)}>
        <p>Modal content</p>
      </Modal>
    )}
    </>
  )
}

export default App
