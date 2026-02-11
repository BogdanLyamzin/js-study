import React from "react";
import {useForm} from "react-hook-form";
import "./ShoppingForm.css";
import TextField from "./components/TextField";
import CheckedField from "./components/CheckedField";
import SelectField from "./components/SelectField";
import { INITIAL_STATE } from "./initialState";
import {fields} from "./fields";
// import useForm from "../../hooks/useForm";
export type ShoppingFormValues = {
  name: string;
  quantity: number;
  price: number;
  urgent: boolean;
  productType: string;
};

export type ShoppingFormProps = {
  submitForm: (data: ShoppingFormValues) => void;
};

const ShoppingForm: React.FC<ShoppingFormProps> = ({
  submitForm,
}: ShoppingFormProps) => {
  const {register, handleSubmit, reset, watch, formState: {errors}} = useForm({
    defaultValues: INITIAL_STATE
  });
  // const { getValues, register, handleSubmit } = useForm<ShoppingFormValues>({initialValues: INITIAL_STATE,});

  // const {quantity, price} = getValues();
  const quantity = watch("quantity");
  const price = watch("price");

  const onSubmit = handleSubmit(values => {
    submitForm(values);
    reset();
  });

  return (
    <>
      <h2 className="text-white text-xl font-semibold">Add Shopping Item</h2>

      <form
        className="mt-4 max-w-md rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-sm"
        onSubmit={onSubmit}
      >
        <TextField {...fields.name} error={errors.name} register={register} />
        <TextField {...fields.quantity} error={errors.quantity}  register={register}/>
        <TextField {...fields.price} error={errors.price} register={register}/>
        <CheckedField {...fields.urgent} register={register} />
        <SelectField {...fields.productType} register={register} />

        <div className="mt-5 flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2">
          <span className="text-sm text-neutral-400">Total</span>
          <p className="text-base font-semibold text-white">
            {quantity * price}
          </p>
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-lime-500 px-4 py-2 text-sm font-medium text-black hover:bg-lime-600 focus:ring-2 focus:ring-lime-400/20"
        >
          Add Item
        </button>
      </form>
    </>
  );
};
export default ShoppingForm;
