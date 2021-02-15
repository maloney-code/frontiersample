import dayjs from "dayjs";

//https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.error(e);
  }
};

// https://learnersbucket.com/examples/javascript/how-to-format-phone-number-in-javascript/
export const formatPhone = (str) => {
  //Filter only numbers from the input
  let cleaned = ("" + str).replace(/\D/g, "");

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `( ${match[1]}) ${match[2]}-${match[3]}`;
  }

  return "";
};

export const formatDate = (dt, fmt) => {
  if (!fmt) fmt = "M/D/YYYY";
  //https://github.com/iamkun/dayjs
  return dt ? dayjs(dt).format(fmt) : "";
};
