import Button from "./Button";
import { regions } from "@/contants/regionList";

function Form({
	search,
	region,
	onClick,
	searchOnChange,
	selectOnChange,
}: FromProps) {
	return (
		<form className="flex flex-col gap-8 pb-10 md:flex-row">
			<input
				id="search"
				name="search"
				type="text"
				placeholder='search for a country...'
				value={search}
				onChange={searchOnChange}
				className="w-full p-3 placeholder-gray-600 bg-gray-200 rounded-xl md:w-96 outline-dashed outline-1 focus:outline-2 focus:outline-gray-500 dark:focus:outline-slate-100"
			/>
			<select
				id="select"
				name="search"
				value={region}
				onChange={selectOnChange}
				className="p-3 bg-gray-200 w-36 md:ml-auto rounded-xl outline-dashed outline-1 focus:outline-2 focus:outline-gray-500 dark:focus:outline-slate-100"
			>
				{regions.map(({ value, label }) => (
					<option key={label} value={value}>
						{label}
					</option>
				))}
			</select>
			<Button onClick={onClick} btnText="clear search" classes="p-2 text-xl" />
		</form>
	);
}

export default Form;
