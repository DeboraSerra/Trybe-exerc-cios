console.log(document.querySelector("#elementoOndeVoceEsta"));

console.log(
  (document.querySelector("#elementoOndeVoceEsta").parentNode.style.color =
    "blue")
);
console.log(
  (document.querySelector("#primeiroFilhoDoFilho").innerText =
    "Esse é o primeiro filho do filho.")
);
console.log(
  (document.querySelector("#pai").firstChild.innerText =
    "Primeiro filho a partir de pai")
);
console.log(
  (document.querySelector("#elementoOndeVoceEsta").previousSibling.innerText =
    "Primeiro filho a partir de elementoOndeVoceEsta")
);
console.log(
  (document.querySelector("#elementoOndeVoceEsta").nextSibling.innerText =
    "Esse é o atenção")
);
console.log(
  (document.querySelector(
    "#elementoOndeVoceEsta"
  ).nextElementSibling.innerText =
    "Terceiro filho a partir de ElementoOndeVoceEsta")
);
console.log(
  (document.querySelector(
    "#pai"
  ).lastElementChild.previousElementSibling.innerText +=
    ". Terceiro filho a partir do pai")
);


let parent = document.querySelector("#pai");
let list = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < list.length; i += 1){
  let listItem = list[i];
  let createListItem = document.createElement('li');
  createListItem.innerText = listItem;
  parent.appendChild(createListItem);
}

let text = "I'm a <strong>newborn</strong> sibling to elementoOndeVoceEsta";
let createTag = document.createElement('p');
createTag.innerHTML = text;
parent.appendChild(createTag);

let elementWhereIAm = document.querySelector("#elementoOndeVoceEsta");
let newText = "I'm a new kid to elementoOndeVoceEsta";
let newTag = document.createElement('h3');
newTag.innerText = newText;
elementWhereIAm.appendChild(newTag)

let firstChildOfChild = document.querySelector("#primeiroFilhoDoFilho");
let otherText = "I'm a kid to primeiroFilhoDoFilho";
let otherTag = document.createElement('h4');
otherTag.innerText = otherText;
firstChildOfChild.appendChild(otherTag);

document.querySelector("#primeiroFilhoDoFilho h4").className = "filhoDoPrimeiroFilhoDoFilho";

console.log(document.querySelector('.filhoDoPrimeiroFilhoDoFilho').parentNode.parentElement.nextSibling.nextElementSibling.innerText += '. I\'m the third child');

let father = document.querySelector("#pai");

let firstChild = document.querySelector('#primeiroFilho');
father.removeChild(firstChild);

let secondChildOfChild = document.querySelector('#segundoEUltimoFilhoDoFilho');
document.querySelector('#elementoOndeVoceEsta').removeChild(secondChildOfChild);


let thirdKid = document.querySelector('#terceiroFilho');
father.removeChild(thirdKid);

let fourthKid = document.querySelector("#quartoEUltimoFilho");
father.removeChild(fourthKid);

let listOfItems = document.querySelectorAll('li');

for (let i = 0; i < listOfItems.length; i += 1) {
  father.removeChild(listOfItems[i]);
}

