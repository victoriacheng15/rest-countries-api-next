"use client";
// import { useGetAllCountriesQuery } from "../redux/services/apiSlice";
import { useCountries } from "./hooks/useCountries";
import CountryCard from "./components/CountryCard";
import Form from "./components/Form";

export default function Home() {
	const {
		data: countries,
		isLoading,
		error,
		search,
		setSearch,
		selectRegion,
		setSelectRegion,
		reset,
	} = useCountries();

	return (
		<main className="bg-slate-50 dark:bg-gray-700">
			<div className="w-11/12 max-w-6xl mx-auto">
				<Form
					onClick={reset}
					search={search}
					searchOnChange={(e) => setSearch(e.target.value)}
					region={selectRegion}
					selectOnChange={(e) => setSelectRegion(e.target.value)}
				/>
				<section>
					{countries?.slice(0, 40).map((country) => (
						<CountryCard key={country.cca3} {...country} />
					))}
				</section>
			</div>
		</main>
	);
}
