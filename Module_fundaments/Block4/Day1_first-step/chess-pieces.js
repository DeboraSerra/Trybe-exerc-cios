let chessPiece = "Bispo";
let lowerChess = chessPiece.toLowerCase();

switch (lowerChess) {
  case "peão":
    console.log("uma casa pra frente, ataca na diagonal");
    break;
  case "torre":
    console.log("para frente e para trás e para os dois lados");
    break;
  case "bispo":
    console.log("Diagonal");
    break;
  case "cavalo":
    console.log("Forma de L para todos os lados");
    break;
  case "rei":
    console.log("uma casa para frente, para trás e para as diagonais")
    break;
  case "rainha":
    console.log("para frente, para trás e para as diagonais")
    break;
  default:
    console.log("Erro");
}