type CityType = {
    title: string
    country: string
}

type AddressType = {
    street: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}


const student: StudentType = {
    id: 1,
    name: "Arslanbek",
    age: 32,
    isActive: false,
    address: {
        street: "Mamaeva 6",
        city: {
            title: "Grozny",
            country: "Chechnya"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "JS"},
        {id: 4, title: "React"},
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.isActive)
console.log(student.address.city.title)
console.log(student.technologies[2].title)