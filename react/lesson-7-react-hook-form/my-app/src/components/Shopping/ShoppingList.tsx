import React from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css"

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  urgent?: boolean,
};

export type ShoppingListProps = {
  items?: ShoppingItem[];
};

const ShoppingList: React.FC<ShoppingListProps> = ({ items = []}) => {
  return (
    <div className="shopping-list">
      <h2 className="shopping-list__title">Shopping List</h2>

      <ul className="shopping-list__items">
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default ShoppingList;
