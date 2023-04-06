"use client";
import { useGetAllCountriesQuery } from "../redux/services/apiSlice";

export default function Home() {
	const { data: countries, isLoading, error } = useGetAllCountriesQuery();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if(error) {
		return <p>somwthing went wrong</p>
	}

	return (
		<main>
			<h1 className="text-2xl text-blue-800 underline">
				tailwind css with nextjs
			</h1>
			<section>
				{
					countries?.slice(0,3).map((country) => (
						<div key={country.name.common}>
							<h2>{country.name.common}</h2>
							<p>capital: {country.capital}</p>
							<p>population: {country.population}</p>
							<img src={country.flags.png} alt={country.name.common} />
						</div>
					))
				}
			</section>
		</main>
	);
}
