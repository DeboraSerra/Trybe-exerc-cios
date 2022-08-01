export const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
export const volume = (value: number, baseU: string, toU: string) => {
  const from = units.indexOf(baseU);
  const to = units.indexOf(toU);
  const exponent = (to - from) * 3;
  return value * Math.pow(10, exponent);
}
