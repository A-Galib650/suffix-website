export const textToUrl = (text) => {
  return text.toLowerCase().split(" ").join("-");
};
export const evenOddRow = (row) =>
  (row.length / 2) % 2 === 0
    ? Math.ceil(row.length / 2) + 1
    : Math.ceil(row.length / 2);

    export const FixedNumber=(number) => (number && number.toFixed(2)) || "";