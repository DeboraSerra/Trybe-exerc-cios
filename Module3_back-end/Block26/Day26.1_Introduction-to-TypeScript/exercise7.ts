export const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
export const capacity = (value: number, baseU: string, toU: string) => {
  const from = units.indexOf(baseU);
  const to = units.indexOf(toU);
  const exponent = to - from;
  console.log({ from, to, exponent });
  return value * Math.pow(10, exponent);
}
