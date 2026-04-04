import { memo } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Checkbox from "../../../shared/components/Checkbox/Checkbox";
import Select from "../../../shared/components/Select/Select";

import { defaultValues, fields } from "./fields";

const AddPurchaseForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...fields.name} register={register} error={errors.name} />
        <TextField {...fields.count} register={register} error={errors.count} />
      <Checkbox {...fields.urgency} register={register} />
      <Select {...fields.category} register={register} />
      <button type="submit">
        Додати
      </button>
    </form>
  );
};

export default memo(AddPurchaseForm);
