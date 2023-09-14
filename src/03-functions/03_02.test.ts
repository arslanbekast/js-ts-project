import {CityType} from "../02-objects/02_02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStaff, toHireStaff} from "./03-functions";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildeAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildeAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildeAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})


test("Budget should be changed for HOSPITAL", () => {

    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
});

test("Budget should be changed for FIRE-STATION", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
});

test("House should be repaired", () => {

    repairedHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
});

test("Staff should be reduced", () => {

    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test("Staff should be increased", () => {

    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});

test("Greeting message should be correct for city", () => {

    expect( createMessage(city) ).toBe("Hello New York citizens. I want you be happy. All 1000000 mens.");
});