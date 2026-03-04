export const defaultValues = {
  name: "",
  count: 1,
  urgency: false,
  category: "food",
};

export const fields = {
  name: {
    label: "Назва покупки:",
    name: "name",
    placeholder: "Название покупки мин 2 символа",
    rules: {
      required: "У покупки должно быть название",
      minLength: {
        value: 2,
        message: "Название покупки не может состоять из одного символа"
      }
    }
  },
  count: {
    label: "Количество:",
    name: "count",
    type: "number",
    placeholder: "Количество",
    rules: {
     validate: value => {
      if(value < 1) return "Количество покупок не может быть меньше 1";
     }
    }
  },
  urgency: {
    label: "Срочность покупки:",
    name: "urgency",
    placeholder: "Срочность покупки",
  },
  category: {
    label: "Категория покупки:",
    name: "category",
    options: [
        {
            value: "food",
            text: "Еда"
        },
        {
            value: "drink",
            text: "Напитки"
        },
        {
            value: "chemical",
            text: "Бытовая химия"
        },
    ]
  }
};
