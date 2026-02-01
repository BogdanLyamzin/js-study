### Завдання - usePreviousValue

Створи кастомний хук usePreviousValue(), який:
- зберігає поточне значення
- дозволяє дізнатись попереднє значення

API хука
```js
const {
  value,
  prevValue,
  setValue
} = usePreviousValue(0);
```

Приклад використання:
```js
function Example() {
  const {
    value,
    prevValue,
    setValue
  } = usePreviousValue(0);

  return (
    <>
      <p>Поточне значення: {value}</p>
      <p>Попереднє значення: {prevValue}</p>

      <button onClick={() => setValue(v => v + 1)}>
        Збільшити
      </button>
    </>
  );
}
```
