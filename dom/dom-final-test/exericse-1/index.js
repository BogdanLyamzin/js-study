/*
Створіть логіку реєстрації користувача та виводу цієї інфомації на екран:
1. Виведіть на екран форму з id="register-form". Налаштування полів візьміть з масива fields.
2. При надсиланні форми поруч із нею в div з id="register-info" виведіть повідомлення "Ви успішно зареєструвалися, {username}".
В index.html файлі ви можете знайти приклад розмітки форми за div з повідомленням, але малювати її треба за допомогою JS.
*/

const fields = [{
    username: {
        label: "Username",
        type: "text",
        name: "username",
        placeholder: "Username",
        required: true,
    },
    email: {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        required: true,
    },
    password: {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
    },
}]