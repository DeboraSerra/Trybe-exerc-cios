function encode(string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "a") {
      newString += 1;
    } else if (string[i] === "e") {
      newString += 2;
    } else if (string[i] === "i") {
      newString += 3;
    } else if (string[i] === "o") {
      newString += 4;
    } else if (string[i] === "u") {
      newString += 5;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
function decode(newString) {
  let string = "";
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] == 1) {
      string += "a";
    } else if (newString[i] == 2) {
      string += "e";
    } else if (newString[i] == 3) {
      string += "i";
    } else if (newString[i] == 4) {
      string += "o";
    } else if (newString[i] == 5) {
      string += "u";
    } else {
      string += newString[i];
    }
  }
  return string;
}

module.exports = {
  encode,
  decode,
}