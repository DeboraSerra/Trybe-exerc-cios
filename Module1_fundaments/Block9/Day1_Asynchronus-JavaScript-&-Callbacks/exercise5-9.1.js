const print = (string) => console.log(string);

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = {
  print,
  uppercase,
};