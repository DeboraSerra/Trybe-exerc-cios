const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian",
  };
  // Insira o retorno da função `getUser`
  return callback(userToReturn);
};

console.log(getUser(userFullName)); 
console.log(getUser(userNationality)); 

