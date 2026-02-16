
import { useState } from "react";
import "./ShoppingItem.css"
export interface ShoppingItemProps {
  item: {
    name: string;
    quantity: number;
    price: number;
    urgent?: boolean,
    productType: string,
  };
}
const ShoppingItem = ({ item }: ShoppingItemProps) => {
    const [done, setDone] = useState(false);
  return (
    <li
      onClick={() => setDone((v) => !v)}
      className={`shopping-item ${done ? "shopping-item--done" : ""} ${item.urgent ? "shopping-item--urgent" : ""}`}
    >
      {item.name} - Quantity: {item.quantity}, Price: ${item.price}, Total: $
      {item.quantity * item.price}, Type: {item.productType}
    </li>
  );
};

export default ShoppingItem;
