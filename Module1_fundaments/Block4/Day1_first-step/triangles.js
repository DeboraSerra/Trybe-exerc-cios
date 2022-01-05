const alfa = 90;
const beta = 45;
const teta = 45;

if (alfa < 0 || beta < 0 || teta < 0) {
    console.log("Erro");
} else if (alfa + beta + teta != 180) {
    console.log(false);
} else if (alfa + beta + teta == 180) {
    console.log(true);
}