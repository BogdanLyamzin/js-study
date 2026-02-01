### Завдання - ScrolableText — прокручуваний список текстів

Потрібно створити React-компонент **ScrolableText**, який відображає великий список текстових абзаців та дозволяє користувачу **плавно прокручувати сторінку до початку або до кінця списку** за допомогою кнопок:
- Має бути кнопка "В кінець" на початку текстів;
- Має бути кнопка "Наверх" в кінці;

Для прокрутки можно використовувати JS-метод:
```js
scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    })
```

Компонент має працювати з масивом рядків і використовувати React-хуки для керування прокруткою DOM-елементів.

## 📦 Вхідні дані

Компонент приймає проп `items` — масив рядків.  
Приклад масиву даних:

```js
[
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cumque rem repellat, quas laborum dolores quos similique aliquam corrupti dolore. Voluptatibus accusantium dolorem ratione. Maxime esse quaerat aliquid dolor neque.",
]
