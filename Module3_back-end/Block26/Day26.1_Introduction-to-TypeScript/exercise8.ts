export const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
export const area = (value: number, baseU: string, toU: string) => {
  const from = units.indexOf(baseU);
  const to = units.indexOf(toU);
  const exponent = (to - from) * 2;
  return value * Math.pow(10, exponent);
}
