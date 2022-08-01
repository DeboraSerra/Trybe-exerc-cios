export const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
export const mass = (value: number, baseU: string, toU: string) => {
  const from = units.indexOf(baseU);
  const to = units.indexOf(toU);
  const exponent = to - from;
  console.log({ from, to, exponent });
  return value * Math.pow(10, exponent);
}
