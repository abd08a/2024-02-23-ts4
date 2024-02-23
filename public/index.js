"use strict";
const addProductToChart = ({ title, price }) => {
    console.log(title);
    console.log(price);
};
addProductToChart({ price: 2323, title: "IPhone" });
let user = {
    name: "xxx",
    surname: "xxx",
    nickName: "xxx",
    age: 20,
};
const userUniqueProps = {
    id: "yyy",
    email: "rob@gmail.com",
};
const userKey = "nickName";
const userTitle = {
    name: "Vytautas",
    surname: "Antanavicius",
    middleName: "Von",
};
const userDetails = {
    name: "Tadas",
    nickName: "tadas123",
};
user = Object.assign(Object.assign({}, user), userDetails);
let book1 = {
    title: 'I had nowhere to go',
    author: 'Jonas Mekas',
    year: 1991,
    press: 'Penguin',
    language: 'english',
};
console.log(book1);
let book2 = {
    title: 'I had nowhere to go',
    author: 'Jonas Mekas',
};
console.log(book2);
const uniqueBookID = {
    id: 'xy15z'
};
console.log('Book ID:', uniqueBookID);
const carDetails = {
    year: 2006,
    price: 5000,
    fuel: 'gasoline',
};
console.log(carDetails);
// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
const bookShelf = [];
const addBookToShelf = ({ title, author, year, press, language }) => {
    const newBook = { title, author, year, press, language };
    bookShelf.push(newBook);
    console.log('Book added to shelf:', newBook.title);
};
addBookToShelf({ title: 'Tralialia', author: 'Jokubas Jokubauskas', year: 1973, press: 'Aukso zuvys', language: 'lithuanian' });
addBookToShelf({ title: 'Catch 22', author: 'Joseph Heller', year: 1965, press: 'Penguin', language: 'english' });
addBookToShelf({ title: 'Silva Rerum', author: 'Kristina Sabaliauskaite', year: 2008, press: 'Baltos Lankos', language: 'lithuanian' });
console.log('Books in a shelf:', bookShelf);
// 7. Supushint kodą į gitbubą.
// 8. CAO TS 4, 5 tema;
