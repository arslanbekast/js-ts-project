import {addSkill, doesStudentLiveIn, makeStudentActive, sum} from "./03-functions";
import {StudentType} from "../02-objects/02-objects";

let a: number;
let b: number;
let student: StudentType

beforeEach(() => {
    a = 1;
    b = 2;
    student = {
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
})

test("sum function should be correct", () => {
    const res = sum(a,b);
    expect(res).toBe(3)
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(4);
    addSkill(student, "Redux");
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("Redux");
    expect(student.technologies[4].id).toBeDefined();
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student)
    expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {
    let res1 = doesStudentLiveIn(student, "Moscow")
    let res2 = doesStudentLiveIn(student, "Grozny")
    expect(res1).toBe(false);
    expect(res2).toBe(true);
})

