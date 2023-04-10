import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://restcountries.com/v3.1";

export const restCountriesApi = createApi({
	reducerPath: "restCountriesApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getAllCountries: builder.query<Country[], void>({
			query: () => "/all",
			transformResponse: (response: Country[]) =>
				response.sort((a, b) => a.name.official.localeCompare(b.name.official)),
		}),
		getOneCountry: builder.query<Country, string>({
			query: (code) => `/alpha/${code}`,
		}),
	}),
});

export const { useGetAllCountriesQuery, useGetOneCountryQuery } =
	restCountriesApi;
