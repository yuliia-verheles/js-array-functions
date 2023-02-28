const getPhones = require('./functions/getPhones');
const getAvailablePhones = require('./functions/getAvailablePhones');
const getOnlyBlackPhones = require('./functions/getOnlyBlackPhones');
const getProPhones = require('./functions/getProPhones');
const sortPhonesByYearDescending = require('./functions/sortPhonesByYearDescending');
const addNewPhone = require('./functions/addNewPhone');
const addPhoneColor = require('./functions/addPhoneColor');
const removePhone = require('./functions/removePhone');
const groupPhonesBySize = require('./functions/groupPhonesBySize');

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

// don't mutate phones
// all functions have list last param, it will be your phones
// all functions are clear uznaesh

// make a chain from funk getPhones -> getAvailablePhones -> sortPhonesByYearDescending -> getOnlyBlackPhones -> getTheBestPhone  and remove that phone getPhones -> removePhone

// * вынести этот файл в другой проект
// инициализировать его (проект)
// подключить библиотеку jest 
// протестировать все функции
// фунцкию groupBy реализовать после того как напишу ей тесты
// ** Проверить каверадж

const allPhones = getPhones(phones);
const availablePhones = getAvailablePhones(allPhones);
const sortedPhones = sortPhonesByYearDescending(availablePhones);
const blackPhones = getOnlyBlackPhones(sortedPhones);
console.log(blackPhones);
const removedFirstBlackPhone = removePhone(blackPhones[0].id, blackPhones);
console.log(removedFirstBlackPhone);
console.log(blackPhones);

