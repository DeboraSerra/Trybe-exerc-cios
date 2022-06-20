const checkNumber = (num) => {
  if (typeof num !== 'number') throw new Error('Not a number');
  if (num === 0) return 'neutral';
  if (num > 0) return 'positive';
  return 'negative';
}

module.exports = checkNumber;
