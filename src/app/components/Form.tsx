function Form({
	search,
	region,
	onClick,
	searchOnChange,
	selectOnChange,
}: FromProps) {
	const regions = [
		{ label: "Select Region", value: "" },
		{ label: "Africa", value: "Africa" },
		{ label: "Americas", value: "Americas" },
		{ label: "Asia", value: "Asia" },
		{ label: "Europe", value: "Europe" },
		{ label: "Oceania", value: "Oceania" },
	];

	return (
		<form className="flex flex-col justify-between gap-8 pb-10 md:flex-row">
			<input
				type="text"
				name="search"
				id="search"
				placeholder='search for a country...'
				value={search}
				onChange={searchOnChange}
				className="w-full p-3 placeholder-gray-600 bg-gray-200 rounded-xl md:w-96 outline-dashed outline-1 focus:outline-2 focus:outline-gray-500 dark:focus:outline-slate-100"
			/>
			<select
				name="search"
				id="search"
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
			<button
				type="button"
				onClick={onClick}
				className="p-2 text-lg capitalize border-2 border-gray-900 w-36 rounded-xl dark:border-slate-100 dark:text-slate-100"
			>
				Clear search
			</button>
		</form>
	);
}

export default Form;
