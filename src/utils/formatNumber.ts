import numeral from "numeral";

export function fPhoneNumber(number: string) {
  const cleaned = ("" + number).replace(/\D/g, "");
  const formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  return formatted;
}

export function fNumber(number: string) {
  return numeral(number).format();
}

export function fCurrency(number: string) {
  const format = number ? numeral(number).format("$0,0.00") : "";
  return format;
}

export function fPercent(number: string) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";
  return result(format, ".0");
}

export function fShortenNumber(number: string) {
  const format = number ? numeral(number).format("0.00a") : "";
  return result(format, ".00");
}

export function fData(number: string) {
  const format = number ? numeral(number).format("0.0 b") : "";
  return result(format, ".0");
}

export const convertNumber = (value: string) => {
  return numeral(value).value() ?? 0;
};

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);
  return isInteger ? format.replace(key, "") : format;
}
