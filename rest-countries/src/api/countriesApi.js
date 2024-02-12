import * as request from "../lib/request.js";
const baseUrl = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  const result = request.get(
    `${baseUrl}/all?fields=flags,name,population,capital,region`
  );
  return result;
};

export const getCountry = async (countryName) => {
  const result = request.get(
    `${baseUrl}/name/${countryName}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
  );
  return result;
};
