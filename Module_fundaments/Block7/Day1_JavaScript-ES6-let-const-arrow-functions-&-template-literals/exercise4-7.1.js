const biggestWord = string => {
  const array = string.split(' ');
  let biggest = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > biggest.length) {
      biggest = array[i];
    }
  }
  return biggest;
}

console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));