const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//Exercise 1
const myBooks = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(myBooks);

//Exercise 2
const listOfAuthors = books.map((book) => {
  const authorList = {};
  authorList.age = book.releaseYear - book.author.birthYear;
  authorList.author = book.author.name;
  return authorList;
}).sort((a, b) => a.age - b.age);

console.log(listOfAuthors);

//Exercise 3
const fantasy = books.filter((myBook) => myBook.genre === 'Fantasia' || myBook.genre === "Ficção Científica");

console.log(fantasy);

//Exercise 4
const oldBooks = books.filter((book) => (2022 - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);

console.log(oldBooks);

//Exercise 5
function fantasyOrSciFiAuthors() {
  const orderedAuthors = [];
  fantasy.forEach((book) => orderedAuthors.push(book.author.name));
  return orderedAuthors.sort();
}

console.log(fantasyOrSciFiAuthors());

//Exercise 6
function oldBooksName() {
  const booksNames = [];
  oldBooks.forEach((book) => booksNames.push(book.name));
  return booksNames;
}

console.log(oldBooksName());

//Exercise 7
function authorWith3DotsOnName() {
  const myBook = books.find((book) => {
    const authorName = book.author.name.split('.');
    if (authorName.length === 4) {
      return book;
    }
  })
  return myBook.name;
}

console.log(authorWith3DotsOnName());
