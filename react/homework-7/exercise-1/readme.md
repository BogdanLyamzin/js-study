### Завдання - Кастомний хук useArray

Створи кастомний хук useArray(initialArray), який спрощує роботу з масивом у стані.

API хука:
```js
const {
  array,
  add,
  remove,
  clear
} = useArray([]);
```

Поведінка:
- array — поточний масив
- add(item): додає елемент у кінець масиву
- remove(index): видаляє елемент за індексом
- clear(): очищає масив

Приклад використання:
```js
function TodoList() {
  const {
    array: todos,
    add,
    remove,
    clear
  } = useArray([]);

  return (
    <>
      <button onClick={() => add("Нова задача")}>
        Додати
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => remove(index)}>❌</button>
          </li>
        ))}
      </ul>

      <button onClick={clear}>Очистити все</button>
    </>
  );
}
```
