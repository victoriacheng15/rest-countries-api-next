"use client";
import { useGetOneCountryQuery } from "@/redux/services/apiSlice";
import Country from "@/components/Country";
import MainContainer from "@/components/MainContainer";
import WidthContainer from "@/components/WidthContainer";

function CountryPage({ params: { code } }: { params: { code: string } }) {
	const { data: country, isLoading } = useGetOneCountryQuery(code);

	return (
		<MainContainer>
			<WidthContainer>
				<section className="flex flex-col items-start gap-8 text-gray-900 md:flex-row dark:text-slate-100">
					{isLoading && <p>Loading...</p>}
					{country?.map((country: Country) => (
						<Country key={country.cca3} {...country} />
					))}
				</section>
			</WidthContainer>
		</MainContainer>
	);
}

export default CountryPage;
