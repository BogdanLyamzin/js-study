import {z} from "zod";

import { validateName } from "./validationRequest";

export const shopZodSchema = z.object({
    name: z.string().nonempty().min(2).refine(async value => {
        try {
            await validateName(value);
            return true;
        }
        catch {
            return false;
        }
    },
    {
        message: "name must be unique"
    }),
    quantity: z.number("Enter number").int().positive(),
    price: z.number("Enter number").int().positive(),
    urgent: z.boolean(),
    productType: z.string().nonempty(),
});

export type ShopFormType = z.infer<typeof shopZodSchema>;
