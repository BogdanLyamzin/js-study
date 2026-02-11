import * as Yup from "yup";

const shopFormSchema = Yup.object({
    name: Yup.string().required("Name must be string").min(2, "name must have at least 2 symbols"),
    quantity: Yup.number().required().integer().positive(),
    price: Yup.number().required().integer().positive(),
    urgent: Yup.boolean().required(),
    productType: Yup.string().required(),
});

export default shopFormSchema;