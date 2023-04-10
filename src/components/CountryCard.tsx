import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import Text from "./Text";

function CountryCard({
	cca3,
	name: { official, common },
	flags: { svg, alt },
	population,
	region,
	capital,
}: Country) {
	return (
		<Link
			href={`${cca3.toLowerCase()}?name=${official}`}
			className="w-full h-full duration-300 ease-in-out sm:max-w-xs hover:scale-110"
		>
			<article className="h-full overflow-hidden text-gray-900 border-2 border-gray-700 rounded-lg shadow-lg shadow-gray-900 dark:border-slate-100 dark:text-slate-300 dark:shadow-slate-500">
				<Image
					src={svg}
					alt={alt ?? official}
					width={300}
					height={320}
					className="object-cover w-full h-[180px]"
				/>
				<div className="p-3 space-y-4">
					<Title title={common} classes="text-xl" />
					<Text
						contentTitle="population"
						content={population.toLocaleString()}
					/>
					<Text contentTitle="region" content={region} />
					<Text contentTitle="capital" content={capital ?? "N/A"} />
				</div>
			</article>
		</Link>
	);
}

export default CountryCard;
