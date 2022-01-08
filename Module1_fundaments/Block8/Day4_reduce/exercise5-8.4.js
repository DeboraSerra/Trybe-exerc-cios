const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = names.map((item) => {
  const arrayItem = item.toLowerCase().split('');
  const aCount = arrayItem.reduce(((acc, item) => (item === 'a') ? acc + 1 : acc), 0)
  return aCount;
}).reduce((acc, item) => acc + item);

console.log(containsA);

