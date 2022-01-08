function checkEnd(word, end) {
  let wordBackward = word.split('').reverse().join('');
  let endBackward = end.split('').reverse().join('');
  let result;

  for (let i = 0; i < endBackward.length; i += 1) {
    if (wordBackward[i] !== endBackward[i]) {
      result = false;
      break;
    } else if (wordBackward[i] === endBackward[i]) {
      result = true;
    }
  }
  return result
}

console.log(checkEnd('joaofernando', 'fernan'));