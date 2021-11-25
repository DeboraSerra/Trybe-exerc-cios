let studentStatus = "aprovada";

switch (studentStatus) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na lista de espera.");
    break;
  case "reprovada":
    console.log("Você foi reprovado");
    break;
  default:
    console.log("não se aplica");
}