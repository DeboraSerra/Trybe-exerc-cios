function biggestWord(words) {
  let biggestName = words[0];
  for (let index of words) {
      if (index.length > biggestName.length) {
      biggestName = index;
    };
  };
  return biggestName;
};

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestWord(names));