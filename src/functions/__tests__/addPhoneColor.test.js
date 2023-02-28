const addPhoneColor = require('../addPhoneColor');

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

const phoneWithAddedColor = {
    id: 6,
    title: 'Apple iPhone 14pro',
    quantity: 5,
    colors: ['red', 'black', 'purple'],
    year: 2022
};

describe('addPhoneColor function', () => {
    test('return array with added color for phone by id=6', () => {
        const testExtendedColorPhone = addPhoneColor(6, 'purple', phones);
        expect(testExtendedColorPhone).toContainEqual(phoneWithAddedColor);
    });
});


