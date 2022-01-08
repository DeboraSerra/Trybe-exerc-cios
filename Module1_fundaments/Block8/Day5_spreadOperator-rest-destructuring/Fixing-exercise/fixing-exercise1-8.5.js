// Faça uma lista com as suas frutas favoritas
const specialFruit = ["Banana", "Watermelon", "Pineaplle"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["Orange juice", "Papaya", "Grapes"];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
