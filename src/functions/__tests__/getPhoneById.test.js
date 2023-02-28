const getPhoneById = require('../getPhoneById');

const phones = [
    {
        id: 0,
        title: 'Apple iPhone 14',
        quantity: 7,
        colors: ['red', 'black', 'green', 'white'],
        year: 2022
    },
    {
        id: 1,
        title: 'Apple iPhone 8',
        quantity: 0,
        colors: ['red', 'black', 'green', 'white'],
        year: 2017
    },
    {
        id: 2,
        title: 'Apple iPhone 10s',
        quantity: 3,
        colors: ['red', 'black', 'green', 'white'],
        year: 2018
    },
    {
        id: 3,
        title: 'Apple iPhone 11pro',
        quantity: 1,
        colors: ['red', 'black', 'white'],
        year: 2019
    },
    {
        id: 4,
        title: 'Apple iPhone 12mini',
        quantity: 0,
        colors: ['red'],
        year: 2020
    },
    {
        id: 5,
        title: 'Apple iPhone 13mini',
        quantity: 2,
        colors: ['black', 'green', 'white'],
        year: 2021
    },
    {
        id: 6,
        title: 'Apple iPhone 14pro',
        quantity: 5,
        colors: ['red', 'black'],
        year: 2022
    },
    {
        id: 7,
        title: 'Apple iPhone 13promax',
        quantity: 3,
        colors: ['red', 'black', 'green', 'white'],
        year: 2021
    },
    {
        id: 8,
        title: 'Apple iPhone 12pro',
        quantity: 2,
        colors: ['red', 'white'],
        year: 2020
    },
    {
        id: 9,
        title: 'Apple iPhone 10',
        quantity: 7,
        colors: ['red', 'green', 'white'],
        year: 2017
    },
    {
        id: 10,
        title: 'Apple iPhone 5s',
        quantity: 0,
        colors: ['red', 'black', 'green', 'white'],
        year: 2013
    },
];

describe('getPhoneById function', () => {
    test('return phone with ID=4', () => {
        const phoneID4 = getPhoneById(4, phones);
        expect(phoneID4).toEqual({
            id: 4,
            title: 'Apple iPhone 12mini',
            quantity: 0,
            colors: ['red'],
            year: 2020
        });
    });

    test('return phone with ID=6', () => {
        const phoneID6 = getPhoneById(6, phones);
        expect(phoneID6).toEqual({
            id: 6,
            title: 'Apple iPhone 14pro',
            quantity: 5,
            colors: ['red', 'black'],
            year: 2022
        });
    });

    test('return phone with ID=10', () => {
        const phoneID10 = getPhoneById(10, phones);
        expect(phoneID10).toEqual({
            id: 10,
            title: 'Apple iPhone 5s',
            quantity: 0,
            colors: ['red', 'black', 'green', 'white'],
            year: 2013
        });
    });

    test('return "underfined" phone with ID=333', () => {
        const phoneID333 = getPhoneById(333, phones);
        expect(phoneID333).toBeUndefined();
    });
});