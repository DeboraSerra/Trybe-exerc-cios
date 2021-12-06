const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', changeClass);
secondLi.addEventListener('click', changeClass);
thirdLi.addEventListener('click', changeClass);
function changeClass(event) {
  if (event.target === firstLi) {
    secondLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
    firstLi.className = 'tech';
    input.removeAttribute.value;
    input.placeholder = 'Alterar a primeira tecnologia';
  } else if (event.target === secondLi) {
    firstLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
    secondLi.className = 'tech';
    input.placeholder = "Alterar a segunda tecnologia";
  } else if (event.target === thirdLi) {
    firstLi.classList.remove("tech");
    secondLi.classList.remove("tech");
    thirdLi.className = 'tech';
    input.placeholder = "Alterar a terceira tecnologia";
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("keyup", changeText);

function changeText() {
  let liChangeText = document.querySelector(".tech");
  let text = input.value;
  liChangeText.innerHTML = text;
  text = null;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

let myPage = myWebpage.addEventListener("dblclick", myPortfolio);
function myPortfolio() {
  let createAnchor = document.createElement('a');
  createAnchor.title = myWebpage;
  createAnchor.href = "https://deboraserra.github.io/portfolio-web.html";
  createAnchor.target = "_blank";
  document.body.firstElementChild.appendChild(createAnchor);
  createAnchor.appendChild(myWebpage);
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let mouseOverColor = myWebpage.addEventListener("mouseover", changeColor);
let mouseleave = myWebpage.addEventListener("mouseleave", backToWhite);
function changeColor() {
  myWebpage.style.color = "green";
}
function backToWhite() {
  myWebpage.style.color = "white";
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
