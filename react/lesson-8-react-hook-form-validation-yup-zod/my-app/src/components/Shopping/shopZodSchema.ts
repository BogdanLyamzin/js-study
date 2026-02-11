import {z} from "zod";

export const shopZodSchema = z.object({
    name: z.string().nonempty().min(2),
    quantity: z.number().int().positive(),
    price: z.number().int().positive(),
    urgenct: z.boolean(),
    productType: z.string().nonempty(),
});

export type ShopFormType = z.infer<typeof shopZodSchema>;
