// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = ifScope + " ótimo, fui utilizada no escopo !";
//     console.log(ifScope);
//   } else {
//     var elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
//   console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escope) => {
  if (escope === true) {
    var ifScope = 'I\'m not suposed to be used outside my escope (if)';
    ifScope = `${ifScope} great, I was used in the escope!`
    console.log(ifScope);
  } else {
    var elseScope = 'I\'m not suposed to be used outside my escope (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} what am I doing here? :O`);
}

testingScope(false);