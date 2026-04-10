import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

import AddPurchaseForm from "./AddPurchaseForm/AddPurchaseForm";
import PurchaseList from "./PurchaseList/PurchaseList";

import styles from "./MyPurchases.module.css";

const MyPurchases = () => {
  const [items, setItems] = useState([]);

  const addPurchase = useCallback(
    (payload) =>
      setItems((prevItems) =>
        [...prevItems, { ...payload, id: nanoid() }]),
    []
  );

  const deletePurchase = useCallback((id) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)), []);

  return (
    <>
      <div className={styles.wrapper}>
        <AddPurchaseForm submitForm={addPurchase} />
        <PurchaseList items={items} deletePurchase={deletePurchase} />
      </div>
    </>
  );
};

export default MyPurchases;
