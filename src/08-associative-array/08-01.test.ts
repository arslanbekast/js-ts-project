import {usersObj} from "./08-01";

type UsersType = {
    [key: string]: {id: number, name: string}
}

export let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '2323': {id: 2323, name: 'Natasha'},
    '323232': {id: 323232, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '2323': {id: 2323, name: 'Natasha'},
        '323232': {id: 323232, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test("Should update corresponding user", () => {

    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})

test("Should delete corresponding user", () => {

    delete users['1']
    expect(users['1']).toBeUndefined()
})