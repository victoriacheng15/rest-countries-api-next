"use client";
import {
	useGetOneCountryQuery,
} from "@/redux/services/apiSlice";
import Image from "next/image";
import Country from "@/components/Country";

function CountryPage({ params: { code } }: { params: { code: string } }) {
	const { data: country, isLoading } = useGetOneCountryQuery(code);

	return (
		<main className="min-h-[calc(100vh-56px-108px)] py-16 bg-slate-50 dark:bg-gray-700">
			<div className="w-11/12 max-w-6xl mx-auto">
				<section className="flex flex-col gap-8 md:flex-row">
					{isLoading && <p>Loading...</p>}
					{country?.map(
						(country: Country) => (<Country {...country} />),
					)}
				</section>
			</div>
		</main>
	);
}

export default CountryPage;
