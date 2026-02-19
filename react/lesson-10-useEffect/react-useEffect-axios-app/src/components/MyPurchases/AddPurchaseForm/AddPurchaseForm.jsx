import TextField from "../../TextField/TextField";
import Checkbox from "../../Checkbox/Checkbox";
import Select from "../../Select/Select";

import useForm from "../../../shared/hooks/useForm";

import { initialState, fields } from "./fields";

const AddPurchaseForm = ({ submitForm }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    submitForm,
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextField {...fields.name} value={state.name} onChange={handleChange} />
      <Checkbox {...fields.urgency} checked={state.urgency} onChange={handleChange} />
      <Select {...fields.category} value={state.category} onChange={handleChange} />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddPurchaseForm;
