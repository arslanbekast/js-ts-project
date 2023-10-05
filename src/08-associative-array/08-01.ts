// export const usersArray = ["Dimych", "Natasha", "Valera", "Katya"]

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '2323': {id: 2323, name: 'Natasha'},
    '323232': {id: 323232, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
// users[1]
const user = {id: 100500, name: 'Igor'}

users[user.id] = user; // Добавляем новый элемент
users[user.id].name = 'Vitya' // Обновляем имя пользователя
delete users[user.id] // Удаляем последний добавленний элемент


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 2323, name: 'Natasha'},
    {id: 323232, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
usersArray.push(user)