"use client";
import { useCountries } from "@/hooks/useCountries";
import { usePagination } from "@/hooks/usePagination";
import CountryCard from "@/components/CountryCard";
import Form from "@/components/Form";
import CardSkeleton from "@/components/CardSkeleton";

export default function Home() {
	const {
		data: countries,
		isLoading,
		error,
		search,
		setSearch,
		selectRegion,
		setSelectRegion,
		resetSearchResult,
	} = useCountries();

	const { limit, setLimit, handleLimit, skeletons } = usePagination();

	function reset() {
		resetSearchResult();
		setLimit(12);
	}

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
					{isLoading &&
						skeletons.map((skeleton) => <CardSkeleton key={skeleton} />)}
					{countries?.slice(0, limit).map((country) => (
						<CountryCard key={country.cca3} {...country} />
					))}
				</section>
				{countries !== undefined && countries.length > limit && (
					<div className="flex justify-center pt-10">
						<button
							type="button"
							onClick={handleLimit}
							className="p-2 text-lg capitalize duration-300 ease-in-out border-2 border-gray-900 w-36 rounded-xl dark:border-slate-100 dark:text-slate-100 hover:bg-gray-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-gray-900"
						>
							Load More
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
