export const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  quantity: {
    label: "Quantity",
    name: "quantity",
    type: "number",
    placeholder: "Quantity",
  },
  price: {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Price",
  },
  urgent: {
    name: "urgent",
    laberl: "Urgent",
  },
  productType:{
    options: [
    { value: "побутова-хімія", text: "Побутова хімія" },
    { value: "продукти", text: "Продукти" },
    { value: "інше", text: "Інше" },
  ],
  label: "Product Type",
  name: "productType"
}
};
