import { useState, useEffect, useRef } from "react";

import AddPurchaseForm from "./AddPurchaseForm/AddPurchaseForm";
import PurchaseList from "./PurchaseList/PurchaseList";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

import styles from "./MyPurchases.module.css";

const MyPurchases = () => {
  const [purchaseList, setPurchaseList] = useLocalStorage({
    key: "my-purchases",
    defaultValue: [],
    checkData: Array.isArray,
  });
  // const [purchaseList, setPurchaseList] = useState(()=> {
  //   try {
  //     const items = JSON.parse(localStorage.getItem("my-purchases"));
  //     return Array.isArray(items) ? items : [];
  //   }
  //   catch {
  //     return [];
  //   }
  // });
  // const firstRender = useRef(true);

  // useEffect(()=> {
  //   if(firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem("my-purchases", JSON.stringify(purchaseList));
  // }, [purchaseList]);

  const addPurchase = (newPurchase) => {
    setPurchaseList((prevPurchaseList) => [...prevPurchaseList, newPurchase]);
  };

  const deletePurchase = (index) => {
    setPurchaseList((prevPurchaseList) =>
      prevPurchaseList.filter((_, idx) => idx !== index)
    );
  };

  return (
    <div className={styles.wrapper}>
      <AddPurchaseForm submitForm={addPurchase} />
      <PurchaseList items={purchaseList} deletePurchase={deletePurchase} />
    </div>
  );
};

export default MyPurchases;
