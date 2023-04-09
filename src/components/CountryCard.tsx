import Image from "next/image";
import Link from "next/link";

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
			href={`${cca3}?name=${official}`}
			className="w-full h-full duration-300 ease-in-out sm:max-w-xs hover:scale-110"
		>
			<article className="h-full overflow-hidden border-2 border-gray-700 rounded-lg shadow-lg shadow-gray-900 flex-s dark:border-slate-100 dark:text-slate-300 dark:shadow-slate-500">
				<Image
					src={svg}
					alt={alt ?? official}
					width={300}
					height={320}
					className="object-cover w-full h-[180px]"
				/>
				<div className="p-3 space-y-4">
					<h2 className="text-xl italic font-bold underline">{common}</h2>
					<p>
						<span className="text-base font-semibold">Population: </span>
						{population.toLocaleString()}
					</p>
					<p>
						<span className="text-base font-semibold">Region: </span>
						{region}
					</p>
					<p>
						<span className="text-base font-semibold">Capital: </span>
						{capital ?? "N/A"}
					</p>
				</div>
			</article>
		</Link>
	);
}

export default CountryCard;
