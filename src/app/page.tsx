"use client";
// import { useGetAllCountriesQuery } from "../redux/services/apiSlice";
import { useCountries } from "./hooks/useCountries";
import CountryCard from "./components/CountryCard";
import Form from "./components/Form";
import CardSkeleton from "./components/CardSkeleton";

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

	const skeletons = [...Array(12).fill(0)].map((_,index) => index + 1)

	return (
		<main className="min-h-[calc(100vh-56px-108px)] py-16 bg-slate-50 dark:bg-gray-700">
			<div className="w-11/12 max-w-6xl mx-auto">
				<Form
					onClick={reset}
					search={search}
					searchOnChange={(e) => setSearch(e.target.value)}
					region={selectRegion}
					selectOnChange={(e) => setSelectRegion(e.target.value)}
				/>
				<section className="grid grid-cols-1 gap-6 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{isLoading && skeletons.map((skeleton) => (<CardSkeleton key={skeleton} />))}
					{countries?.map((country) => (
						<CountryCard key={country.cca3} {...country} />
					))}
				</section>
			</div>
		</main>
	);
}
