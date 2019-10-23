import numberWithCommas from "../../utils/number-with-commas";

const getSumOfValues = (list = []) => {
  const total = list.reduce((prev, { value = 0 }) => prev + value, 0);
  return numberWithCommas(total);
};

export default getSumOfValues;
