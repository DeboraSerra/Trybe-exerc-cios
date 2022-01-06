//Exercise1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (item) => item % 3 === 0 && item % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5));

console.log(findDivisibleBy3And5(15));
console.log(findDivisibleBy3And5(10));

//Exercise2

const names = ["João", "Irene", "Fernando", "Maria"];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(names.find(findNameWithFiveLetters))

console.log(findNameWithFiveLetters('João'));
console.log(findNameWithFiveLetters('Irene'));

//Exercise3

const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

function findMusic(id) {
  // Adicione seu código aqui
 return musicas.find((item) => item.id);
}

console.log(findMusic("31031685"));