import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ShoppingForm from "./ShoppingForm";
import { nanoid } from "nanoid";
import "./Shopping.css";

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  urgent?: boolean,
  productType: string,
};

export type ShoppingFormValues = {
  name: string;
  quantity: number;
  price: number;  
  urgent: boolean, 
  productType: string,
};
// const SHOPPING_ITEMS: ShoppingItem[] = [
//   { id:  nanoid(), name: "Milk", quantity: 2, price: 1.5 },
//   { id:  nanoid(), name: "Bread", quantity: 1, price: 1.2 },
//   { id:  nanoid(), name: "Eggs", quantity: 10, price: 0.25 },
//   { id:  nanoid(), name: "Apples", quantity: 6, price: 0.4 },
// ];

const Shopping: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [backendErrors, setBackendErrors] = useState([]);
  const addItem = (data: ShoppingFormValues): void =>{
    return setBackendErrors([{
      name: "price",
      message: "price must be more then 10"
    },
    {
      name: "quantity",
      message: "quantity must be more then 1"
    }])
    const newItem = {...data, id: nanoid(), quantity: Number(data.quantity), price: Number(data.price), urgent: data.urgent, productType: data.productType}
    setItems(prev => [...prev, newItem])
  }
  return (
    <>
      <div className="shoppingLayout">
        <div className="leftCol">
          <ShoppingForm backendErrors={backendErrors} submitForm={addItem} />
        </div>

        <div className="rightCol">
          <ShoppingList items={items} />
        </div>
      </div>
    </>
  );
};

export default Shopping;
