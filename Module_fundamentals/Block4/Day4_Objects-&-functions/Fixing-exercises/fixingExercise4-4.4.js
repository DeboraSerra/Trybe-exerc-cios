function calculator(a, b, operator) {
  if (operator == '+') {
    return a + b;
  } else if (operator == '-') {
    return a - b
  } else if (operator == '*') {
    return a * b;
  } else if (operator == '/') {
    return a / b;
  } else if (operator == '%' || operator == 'modulo' || operator == 'resto da divisão') {
    return a % b;
  }
}
