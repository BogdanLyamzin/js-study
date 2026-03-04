import useForm from "../../../shared/hooks/useForm";

import { initialState } from "./initialState";

const AddToDoForm = ({ submitForm }) => {
  const {state, handleChange, handleSubmit} = useForm({initialState, submitForm});

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-name">Название дела:</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Название дела"
          id="todo-name"
        />
      </div>
      <div>
      <label htmlFor="todo-urgency">Срочность дела:</label>
        <input
          type="checkbox"
          name="urgency"
          checked={state.urgency}
          onChange={handleChange}
          id="todo-urgency"
        />
      </div>
      <button type="submit">Добавить дело</button>
    </form>
  );
};

export default AddToDoForm;
