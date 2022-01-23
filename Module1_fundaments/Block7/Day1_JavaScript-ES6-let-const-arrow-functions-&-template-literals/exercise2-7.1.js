const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// const sortedNums = (array) => {
//   for (let i = 1; i < array.length; i += 1) {
//     for (let x = 0; x < i; x += 1) {
//       if (array[i] < array[x]) {
//         let temp = array[i];
//         array[i] = array[x];
//         array[x] = temp;
//       }
//     }
//   }
// }

const sortedNums = array => array.sort((a,b) => a-b);

sortedNums(oddsAndEvens);

console.log(`The numbers ${oddsAndEvens} are ordered in crescent order`);
