let n = 5;
let line = '';
let position = n;

for (let i = 0; i <= n; i += 1){
  for (let x = 0; x <= n; x += 1){
    if (x < position) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  line = '';
  position -= 1;
}



