import { useMemo, useState } from "react";
import { useGetAllCountriesQuery } from "../../redux/services/apiSlice";

export function useCountries() {
	const { data, isLoading, error } = useGetAllCountriesQuery();
	const [search, setSearch] = useState("");
	const [selectRegion, setSelectRegion] = useState("");

	const searchCountries = (query: string, queryRegion: string) => {
		const searchLowerCase = query.toLowerCase();
		return data?.filter(
			({ name: { official }, region }) =>
				official.toLowerCase().includes(searchLowerCase) &&
				region.includes(queryRegion),
		);
	};

	const filteredList = useMemo(() => {
		return searchCountries(search, selectRegion);
	}, [data, search, selectRegion]);

	function reset() {
		setSearch("");
		setSelectRegion("");
	}

	return {
		data: filteredList,
		isLoading,
		error,
		search,
		setSearch,
		selectRegion,
		setSelectRegion,
		reset,
	};
}
