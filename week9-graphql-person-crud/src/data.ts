const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
    categoryId: 1,
  },
  {
    id: '2',
    title: 'City of Glass and other',
    author: 'Paul Auster',
    categoryId: 1,
  },{
    id: '3',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    categoryId: 2,
  }
];

const addresses = [
  {
    id: '1',
    address: "Mørkhøjvej 12",
    housenumber: 2,

  },
  {
    id: '2',
    address: "krejbjergvej 90",
    housenumber: 2

  },
];

const people = [
  {
    id: '1',
    name: "John",
    age: 18,
    addressId: '1'

  },
  {
    id: '2',
    name: "Karl",
    age: 56,
    addressId: '1',

  },
];


const categories = [
  {
    id: '1',
    name: 'Fantasy',
  },
  {
    id: '2',
    name: 'Science Fiction',
  },
  {
    id: '3',
    name: 'Horror',
  },
];
const ratings = [
  {
    id: '1',
    value: 5,
    title: 'Great',
    description: 'This book is great',
    bookId: '1',
  },
  {
    id: '2',
    value: 4,
    title: 'Good',
    description: 'This book is good',
    bookId: '1',
  },
];

export {
    books,
    categories,
    ratings,
    people,
    addresses,
};