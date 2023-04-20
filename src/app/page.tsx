"use client";
import { useCountries } from "@/hooks/useCountries";
import { usePagination } from "@/hooks/usePagination";
import CountryCard from "@/components/CountryCard";
import Form from "@/components/Form";
import CardSkeleton from "@/components/CardSkeleton";
import Button from "@/components/Button";
import Layout from "@/components/Layout";

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

	const skeletonLoading =
		isLoading && skeletons.map((skeleton) => <CardSkeleton key={skeleton} />);

	return (
		<Layout>
			<Layout isMain={false}>
				<Form
					onClick={reset}
					search={search}
					searchOnChange={(e) => setSearch(e.target.value)}
					region={selectRegion}
					selectOnChange={(e) => setSelectRegion(e.target.value)}
				/>
				<section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 h-[950px] overflow-y-scroll p-6 justify-center justify-items-center content-start border-2 border-gray-300">
					{skeletonLoading}
					{countries?.slice(0, limit).map((country) => (
						<CountryCard key={country.cca3} {...country} />
					))}
				</section>
				{countries !== undefined && countries.length > limit && (
					<div className="flex justify-center pt-10">
						<Button
							onClick={handleLimit}
							btnText="load more"
							classes="p-2 text-xl"
						/>
					</div>
				)}
			</Layout>
		</Layout>
	);
}
