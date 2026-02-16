export const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
    // validate: async value => {
    //   try {
    //     await axios.post("http://localhost:3000/api/shopping/name", {
    //       name: value
    //     });
    //     return true;
    //   }
    //   catch(errror) {
    //     return 'Name must be unique'
    //   }
    // }
  },
  quantity: {
    label: "Quantity",
    name: "quantity",
    type: "number",
    placeholder: "Quantity",
    validation: {
      valueAsNumber: true
    }
  },
  price: {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Price",
    validation: {
      valueAsNumber: true
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
