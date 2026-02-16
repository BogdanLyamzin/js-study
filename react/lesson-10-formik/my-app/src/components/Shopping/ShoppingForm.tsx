import React, { useEffect } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "./ShoppingForm.css";
import TextField from "./components/TextField";
import CheckedField from "./components/CheckedField";
import SelectField from "./components/SelectField";
import TotalShopFormPrice from "./TotalShopFormPrice";
import { INITIAL_STATE } from "./initialState";
import {fields} from "./fields";
import shopFormSchema from "./shopFormSchema";
import { shopZodSchema } from "./shopZodSchema";

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
  // backendErrors,
  submitForm,
}: ShoppingFormProps) => {
  
  // useEffect(()=> {
  //   backendErrors.forEach(({name, message}) => {
  //     setError(name, {
  //       message,
  //     });
  //   });
  // }, [backendErrors]);
 
  return (
    <Formik initialValues={INITIAL_STATE} validationSchema={toFormikValidationSchema(shopZodSchema)} onSubmit={(values, {resetForm}) => {
      console.log(values);
      resetForm();
    }}>
      <Form
        className="mt-4 max-w-md rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-sm"
      >
        <TextField {...fields.name} />
        <TextField {...fields.quantity} type="nubmer" />
        <Field {...fields.price} type="nubmer" />
        <ErrorMessage name={fields.price.name} />
        <Field {...fields.urgent} type="checkbox" />
        <Field {...fields.productType} as="select">
          {fields.productType.options.map(({text, value}) => (
            <option key={value} value={value}>{text}</option>
          ))}
          </Field>
        {/* <Field {...fields.name} />
        <ErrorMessage name={fields.name.name} />
        <Field {...fields.quantity} type="nubmer" />
        <ErrorMessage name={fields.quantity.name} />
        <Field {...fields.price} type="nubmer" />
        <ErrorMessage name={fields.price.name} />
        <Field {...fields.urgent} type="checkbox" />
        <Field {...fields.productType} as="select">
          {fields.productType.options.map(({text, value}) => (
            <option key={value} value={value}>{text}</option>
          ))}
          </Field> */}
       <TotalShopFormPrice />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-lime-500 px-4 py-2 text-sm font-medium text-black hover:bg-lime-600 focus:ring-2 focus:ring-lime-400/20"
        >
          Add Item
        </button>
      </Form>
      </Formik>
  );
};
export default ShoppingForm;
