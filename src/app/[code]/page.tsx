"use client";
import { useGetOneCountryQuery } from "@/redux/services/apiSlice";
import Link from "next/link";
import Country from "@/components/Country";
import Layout from "@/components/Layout";

function CountryPage({ params: { code } }: CountryPageProps) {
	const { data: country, isLoading } = useGetOneCountryQuery(code);

	return (
		<Layout>
			<Layout isMain={false}>
				<Link
					href="/"
					className="p-4 text-lg font-semibold duration-300 ease-in-out bg-gray-900 hover:rounded-2xl text-slate-100 dark:bg-slate-100 dark:text-gray-900"
				>
					Back to home
				</Link>
				<section className="flex flex-col items-start gap-8 pt-20 text-gray-900 md:flex-row dark:text-slate-100">
					{isLoading && <p>Loading...</p>}
					{country?.map((country: Country) => (
						<Country key={country.cca3} {...country} />
					))}
				</section>
			</Layout>
		</Layout>
	);
}

export default CountryPage;
