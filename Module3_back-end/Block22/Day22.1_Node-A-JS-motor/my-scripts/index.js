const { questionInt } = require('readline-sync');

const scripts = [
  {name: 'Calculate speed', path: './speed'},
  {name: 'Calculate IMC', path: './imc'},
  {name: 'Play guess the number', path: './sort'},
  {name: 'Get the factorial of a number', path: './factorial'},
  {name: 'Get a fibonacci sequence below a number', path: './fibonacci'},
]

const selectScript = () => {
  const startMes = 'Pick a number to choose what you want: \n';
  const message = scripts.reduce((acc, { name }, index) => (
    acc + `${index} - ${name} \n`
  ), startMes);
  const selected = questionInt(message);
  const scriptSelected = scripts[selected];
  require(scriptSelected.path);
}

selectScript();
