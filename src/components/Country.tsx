import Image from "next/image";
import { useGetAllCountriesQuery } from "@/redux/services/apiSlice";
import Title from "./Title";
import Text from "./Text";
import BorderLink from "./BorderLink";

function Country({
	flags: { svg, alt },
	name: { official },
	population,
	region,
	subregion,
	capital,
	tld,
	currencies,
	languages,
	borders,
}: Country) {
	const { data: countries } = useGetAllCountriesQuery();

	function getBorderName(border: string) {
		return countries
			?.filter(({ cca3 }) => cca3.includes(border))
			.map(({ name: { common } }) => common);
	}

	const displayCurrencies = currencies
		? Object.values(currencies)
				.map(({ name }) => name)
				.join(", ")
		: "N/A";

	const displayLangs = languages
		? Object.values(languages)
				.map((l) => l)
				.join(", ")
		: "N/A";

	return (
		<>
			<Image
				src={svg}
				alt={alt ?? official}
				width={1600}
				height={800}
				className="w-full max-w-2xl md:w-1/2"
			/>
			<div className="space-y-4">
				<Title title={official} classes="text-4xl" />
				<Text contentTitle="population" content={population.toLocaleString()} />
				<Text contentTitle="region" content={region} />
				<Text contentTitle="sub region" content={subregion} />
				<Text contentTitle="capital" content={capital} />
				<Text contentTitle="top level domain" content={tld.join(" | ")} />
				<Text contentTitle="currencies" content={displayCurrencies} />
				<Text contentTitle="languages" content={displayLangs} />
				<h3 className="text-xl font-semibold">Borders:</h3>
				<ul className="flex flex-wrap gap-4">
					{borders
						? borders.flatMap((border) => (
								<BorderLink
									key={border}
									href={`/${border.toLowerCase()}?name=${getBorderName(border)}`}
									borderName={getBorderName(border)}
								/>
						  ))
						: <li><p className="text-lg">No border countries</p></li>}
				</ul>
			</div>
		</>
	);
}

export default Country;
