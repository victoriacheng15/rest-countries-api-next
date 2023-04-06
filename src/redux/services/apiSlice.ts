import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Countries {
  cca3: string;
  flags: {
    [key: string]: string;
  };
  alt: string;
  name: {
    [key: string]: string;
  };
  population: string;
  region: string;
  capital: string;
}

const baseUrl = "https://restcountries.com/v3.1";

export const restCountriesApi = createApi({
  reducerPath: "restCountriesApi",
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Countries, void>({
      query: () => "/all",
    }),
  }),
});

export const { useGetAllCountriesQuery } = restCountriesApi;
