import * as Yup from "yup";

import { validateName } from "./validationRequest";

const shopFormSchema = Yup.object({
  name: Yup.string()
    .required("Name must be string")
    .min(2, "name must have at least 2 symbols")
    .test("unique-name", "name must be unique", async value => {
        try {
            console.log(value);
            await validateName(value);
            return true;
        }
        catch {
            return false;
        }
    }),
  quantity: Yup.number().required().integer().positive(),
  price: Yup.number().required().integer().positive(),
  urgent: Yup.boolean().required(),
  productType: Yup.string().required(),
});

export default shopFormSchema;
