import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://restcountries.com/v3.1";
const FIELD =
	"fields=cca3,flags,name,population,region,capital,subregion,tld,currencies,languages,borders";

export const restCountriesApi = createApi({
	reducerPath: "restCountriesApi",
	baseQuery: fetchBaseQuery({ baseUrl: URL }),
	endpoints: (builder) => ({
		getAllCountries: builder.query<Country[], void>({
			query: () => `/all?${FIELD}`,
			transformResponse: (response: Country[]) =>
				response.sort((a, b) => a.name.common.localeCompare(b.name.common)),
		}),
		getOneCountry: builder.query<Country[], string>({
			query: (code) => `/alpha/${code}`,
		}),
	}),
});

export const { useGetAllCountriesQuery, useGetOneCountryQuery } =
	restCountriesApi;
