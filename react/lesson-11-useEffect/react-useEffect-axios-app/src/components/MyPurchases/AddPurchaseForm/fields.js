export const initialState = {
  name: "",
  urgency: false,
  category: "food",
};

export const fields = {
  name: {
    label: "Название покупки:",
    name: "name",
    required: true,
    placeholder: "Название покупки",
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
