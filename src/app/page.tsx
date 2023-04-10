"use client";
import { useCountries } from "@/hooks/useCountries";
import { usePagination } from "@/hooks/usePagination";
import MainContainer from "@/components/MainContainer";
import WidthContainer from "@/components/WidthContainer";
import CountryCard from "@/components/CountryCard";
import Form from "@/components/Form";
import CardSkeleton from "@/components/CardSkeleton";
import Button from "@/components/Button";

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
		<MainContainer>
			<WidthContainer>
				<Form
					onClick={reset}
					search={search}
					searchOnChange={(e) => setSearch(e.target.value)}
					region={selectRegion}
					selectOnChange={(e) => setSelectRegion(e.target.value)}
				/>
				<section className="grid grid-cols-1 gap-6 justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
			</WidthContainer>
		</MainContainer>
	);
}
