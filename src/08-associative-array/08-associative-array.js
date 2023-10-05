const user = {
    name: "Dimych",
    age: 34,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

console.log(user.address.city.title) // Minsk
console.log(user['address']['city']['title']) // Minsk

const users = ["Dimych", "Natasha", "Valera", "Katya"]

users["map"]((u) => u.toUpperCase()) // Таким образом вызвали метод .map у массива, так тоже можно

const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
usersObj['table'] = 'brown' // Добавили новое свойство в объект
usersObj['привет как дела'] = 'ХОРОШО' // Добавили новое свойство в объект
console.log(usersObj['привет как дела']) // ХОРОШО

Object.keys(usersObj) // Получает массив с ключами объекта usersObj
Object.values(usersObj) // Получает массив со значениями объекта usersObj


