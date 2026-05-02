import { useDispatch } from "react-redux";

import { deletePurchase } from "../../../redux/purchases/purchasesActionCreators";

const MyPurchasesList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeletePurchase = (id)=> {
    dispatch(deletePurchase(id));
  };

  const elements = items.map(({ id, title, count }) => (
    <li key={id}>
      Title: {title}. Count: {count}
      <button type="button" onClick={()=> onDeletePurchase(id)}>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MyPurchasesList;
