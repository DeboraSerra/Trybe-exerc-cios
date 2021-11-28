let n = 5;
let line = '';

let midPosition = (n + 1) / 2;
let left = midPosition;
let right = midPosition;

for (let i = 0; i <= midPosition; i += 1){
  for (let x = 0; x <= n; x += 1){
    if (x > left && x < right) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}



