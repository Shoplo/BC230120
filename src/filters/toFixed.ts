export default (value: string | number, fractionDigits: number): string => {
  if (typeof value === 'string') {
    return parseFloat(value).toFixed(fractionDigits);
  }

  return value.toFixed(fractionDigits);
};
