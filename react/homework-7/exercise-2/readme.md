### Завдання - Кастомний хук useTabs

Створи кастомний хук useTabs(initialIndex), який керує активною вкладкою (tab).

API хука:
```js
const {
  activeIndex,
  setActive,
  next,
  prev
} = useTabs(0);
```

Поведінка:
- activeIndex — індекс активної вкладки
- setActive(index): встановлює активну вкладку
- next(): збільшує індекс на 1
- prev(): зменшує індекс на 1
- індекс не може бути меншим за 0

Приклад використання:
```js
function Tabs() {
  const {
    activeIndex,
    setActive,
    next,
    prev
  } = useTabs(0);

  return (
    <>
      <button onClick={prev}>⬅</button>
      <button onClick={next}>➡</button>

      <div>
        Активна вкладка: {activeIndex}
      </div>

      <div>
        <button onClick={() => setActive(0)}>Tab 1</button>
        <button onClick={() => setActive(1)}>Tab 2</button>
        <button onClick={() => setActive(2)}>Tab 3</button>
      </div>
    </>
  );
}
```
