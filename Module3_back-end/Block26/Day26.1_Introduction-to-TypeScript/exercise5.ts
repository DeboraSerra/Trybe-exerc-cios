export const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
export const length = (value: number, unitBase: string, unitConv:  string) => {
  const from = units.indexOf(unitBase);
  const to = units.indexOf(unitConv);
  const exponent = to - from;
  console.log({ from, to, exponent });
  return value * Math.pow(10, exponent);
}
