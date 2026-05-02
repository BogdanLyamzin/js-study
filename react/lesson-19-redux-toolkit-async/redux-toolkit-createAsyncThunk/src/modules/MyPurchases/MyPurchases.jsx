
import { useSelector, useDispatch } from "react-redux";

import MyPurchasesForm from "./MyPurchasesForm/MyPurchasesForm";
import MyPurchasesList from "./MyPurchasesList/MyPurchasesList";

import { addPurchase } from "../../redux/purchases/purchasesSlice";
import { selectPurchases } from "../../redux/purchases/purchasesSelectors";

const MyPurchases = () => {
  const purchases = useSelector(selectPurchases);

  const dispatch = useDispatch();

  const onAddPurchase = data => {
    dispatch(addPurchase(data));
  };

  return (
    <div>
      <MyPurchasesForm submitForm={onAddPurchase} />
      <MyPurchasesList items={purchases} />
    </div>
  );
};

export default MyPurchases;
