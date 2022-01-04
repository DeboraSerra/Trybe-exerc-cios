const employee = (fullName) => {
  const email = `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;
  return { fullName, email };
}

const newEmployees = () => {
  const employees = {
    id1: employee('Debora Serra'),
    id2: employee('Gabriel Pondaco'),
    id3: employee('Kaell Alecsander'),
  };
  return employees;
};

console.log(newEmployees());