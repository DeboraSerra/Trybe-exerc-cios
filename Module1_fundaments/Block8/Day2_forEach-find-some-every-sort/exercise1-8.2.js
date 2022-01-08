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
console.log(books.find((item) => item.author.birthYear === 1947));

//Exercise 2
function smallerName() {
  let nameBook = books[0].author.name;
  // escreva aqui o seu código
  books.forEach((item) => item.author.name.length < nameBook.length ? nameBook = item.author.name : stop = true)
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName());

//Exercise 3
function getNamedBook() {
  // escreva seu código aqui
  return books.find((item) => item.name.length === 26);
}

console.log(getNamedBook());

//Exercise 4
books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(books);

//Exercise 5
console.log(books.every((item) => item.author.birthYear >= 1901 && item.author.birthYear < 2001));

//Exercise 6
console.log(books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1989));

//Exercise 7
function authorUnique() {
  const birthYears = [];
  books.forEach((item) => birthYears.push(item.author.birthYear));
  let authorBirth = true;
  birthYears.forEach((item, index) => {
    for (let i = 0; i < birthYears.length; i += 1) {
      if (item === birthYears[i] && index !== i) {
        authorBirth = false
      }
    }
  })
  return authorBirth;
}

console.log(authorUnique());
