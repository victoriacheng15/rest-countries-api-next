import Image from "next/image";
import { useGetAllCountriesQuery } from "@/redux/services/apiSlice";

function Country({
	flags: { svg, alt },
	name: { official, common },
	population,
	region,
	subregion,
	capital,
	tld,
	currencies: money,
	languages: lang,
	borders,
}: Country) {
	const { data: countries } = useGetAllCountriesQuery();

	function getBorderName(border: string) {
		return countries
			?.filter(({ cca3 }) => cca3.includes(border))
			.map(({ name }) => name.common);
	}

	return (
		<>
			<Image
				src={svg}
				alt={alt ?? official}
				width={1600}
				height={800}
				className="w-1/2 max-w-xl"
			/>
			<div className="w-11/12 space-y-4">
				<h2 className="text-2xl font-bold">{official}</h2>
				<p>
					<span>population:</span>
					{population}
				</p>
				<p>
					<span>region:</span>
					{region}
				</p>
				<p>
					<span>sub region:</span>
					{subregion}
				</p>
				<p>
					<span>capital:</span>
					{capital}
				</p>
				<p>
					<span>top level domain:</span>
					{tld.join(" | ")}
				</p>
				<p>
					<span>currencies:</span>
					{money
						? Object.values(money)
								.map(({ name }) => name)
								.join(", ")
						: "N/A"}
				</p>
				<p>
					<span>languages:</span>
					{lang
						? Object.values(lang)
								.map((l) => l)
								.join(", ")
						: "N/A"}
				</p>
				<h3 className="text-xl font-semibold">Borders:</h3>
				<ul className="flex flex-wrap gap-4">
					{borders
						? borders.flatMap((border) => (
								<>
									<li
										key={border}
										className="p-2 bg-gray-900 text-slate-100 dark:bg-slate-100 dark:text-gray-900"
									>
										{getBorderName(border)}
									</li>
								</>
						  ))
						: "No border countries"}
				</ul>
			</div>
		</>
	);
}

export default Country;
