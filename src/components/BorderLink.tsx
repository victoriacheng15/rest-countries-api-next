import Link from "next/link";

function BorderLink({ href, borderName }: BorderLinkProps) {
	return (
		<li>
			<Link
				href={href}
				className="p-2 font-semibold duration-300 ease-in-out bg-gray-900 text-slate-100 dark:bg-slate-100 dark:text-gray-900 hover:rounded-lg"
			>
				{borderName}
			</Link>
		</li>
	);
}

export default BorderLink;
