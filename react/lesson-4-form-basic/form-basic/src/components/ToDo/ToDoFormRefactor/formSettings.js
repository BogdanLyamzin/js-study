export const initialState = {
  title: "",
  urgency: false,
  type: "home",
};

export const fields = {
  title: {
    label: "Title:",
    type: "text",
    name: "title",
    placeholder: "Title",
  },
  urgency: {
    label: "Urgency:",
    name: "urgency"
  },
  type: {
    label: "Type:",
    name: "type",
    options: [
      {
        value: "home",
        text: "Home"
      },
      {
        value: "buy",
        text: "Buy"
      },
      {
        value: "work",
        text: "Work"
      },
    ]
  }
}