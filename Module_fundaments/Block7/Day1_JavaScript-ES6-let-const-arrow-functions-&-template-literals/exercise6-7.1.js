const skills = ['JavaScript', 'CSS', 'HTML', 'How to receive feedback', 'How to give feedback'];

const myPhrase = (string) => {
  let phrase = "Tryber x here!"
  let newPhrase = phrase.replace('x', string);
  return newPhrase;
}
const startPhrase = myPhrase('Débora')
const newPhrase = (myPhrase) => {
  let newSkills = skills.sort().join(', ');
  return `${myPhrase} My top five skills are ${newSkills}`;
}

console.log(newPhrase(startPhrase));