/*
08 - Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

function findYoungestPerson(marinaAge, silviaAge, izaAge) {
  if (marinaAge < silviaAge && marinaAge < izaAge) {
    return "Marina é a pessa mais jovem e possui " + marinaAge + " anos de idade."
  } else if (silviaAge < marinaAge && silviaAge < izaAge) {
    return "Silvia é a pessa mais jovem e possui " + silviaAge + " anos de idade."
  } else if (izaAge < silviaAge && izaAge < marinaAge) {
    return "Iza é a pessa mais jovem e possui " + izaAge + " anos de idade."
  }
}

console.log(findYoungestPerson(52, 35, 32));