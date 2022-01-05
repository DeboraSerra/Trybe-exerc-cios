document.getElementById("not-u-but-i").innerText = "Estudar progamação e realizar os projetos";
document.querySelector("#not-u-and-not-i").innerText = "Happy-hour da turma";
const emergencies = document.querySelectorAll(".emergency-tasks div p");
for (let i = 0; i < emergencies.length; i += 1){
  emergencies[i].innerText = "Não tenho nada urgente no momento";
};

