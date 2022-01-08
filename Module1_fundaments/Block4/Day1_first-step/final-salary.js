const initialSalary = 3000.00;
let finalSalary = 0;

const aliquotOneInss = 0.08;
const aliquotTwoInss = 0.09;
const aliquotTrheeInss = 0.11;
const aliquotFourInss = 570.88;

let salaryPartOne = 0;

if (initialSalary <= 1556.94) {
  salaryPartOne = initialSalary - initialSalary * aliquotOneInss;
} else if (initialSalary <= 2594.92) {
  salaryPartOne = initialSalary - initialSalary * aliquotTwoInss;
} else if (initialSalary <= 5189.82) {
  salaryPartOne = initialSalary - initialSalary * aliquotTrheeInss;
} else if (initialSalary > 5189.82) {
  salaryPartOne = initialSalary - aliquotFourInss;
}

const aliquotOneIr = 0.075;
const deductOneIr = 142.80;
const aliquotTwoIr = 0.15;
const deductTwoIr = 354.80;
const aliquotThreeIr = 0.225;
const deductThreeIr = 636.13;
const aliquotFourIr = 0.275;
const deductFourIr = 869.36;

if (salaryPartOne >= 1556.95 && salaryPartOne <= 2826.65) {
  finalSalary = salaryPartOne - (salaryPartOne * aliquotOneIr - deductOneIr);
} else if (salaryPartOne <= 3751.05) {
  finalSalary = salaryPartOne - (salaryPartOne * aliquotTwoIr - deductTwoIr);
} else if (salaryPartOne <= 4664.68) {
  finalSalary = salaryPartOne - (salaryPartOne * aliquotThreeIr - deductThreeIr);
} else if (salaryPartOne > 4664.68) {
  finalSalary = salaryPartOne - (salaryPartOne * aliquotFourIr - deductFourIr);
}

console.log(finalSalary)