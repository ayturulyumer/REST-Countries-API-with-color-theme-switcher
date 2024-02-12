import * as request from "../lib/request.js";
const initialCountries =
  "https://restcountries.com/v3.1/all?fields=flags,name,population,capital,region";

export const getCountries = async () => {
  const result = request.get(initialCountries);
  return result;
};
