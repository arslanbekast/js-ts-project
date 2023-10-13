
function icreaseAge(user: UserType) {
    user.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('Object reference type test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    icreaseAge(user);

    expect(user.age).toBe(33)

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)

})

test('Array reference type test', () => {

    const users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    let admins = users

    admins.push({name: 'Bandugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandugan', age: 10})

})

test('Value type test', () => {

    const usersCount = 100

    let adminsCount = usersCount

    adminsCount += 1;

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)

})

test('Reference type test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    // let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Kanary')
})

test('Reference type array test', () => {

    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, { name: 'Misha', age: 4, address: address }]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(admins[0].name).toBe('Dmitry')
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('Sort array test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort();

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])

})