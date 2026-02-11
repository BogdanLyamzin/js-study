export const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
    validation: {
      required: "filed required"
    }
  },
  quantity: {
    label: "Quantity",
    name: "quantity",
    type: "number",
    placeholder: "Quantity",
    validation: {
      required: "filed required",
      min: {
        value: 1,
        message: "quantity must be at least 1"
      }
    }
  },
  price: {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Price",
    validation: {
      required: "filed required",
      min: {
        value: 1,
        message: "price must be at least 1"
      }
    }
  },
  urgent: {
    name: "urgent",
    label: "Urgent",
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
