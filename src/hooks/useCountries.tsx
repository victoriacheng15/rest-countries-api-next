import { useMemo, useState } from "react";
import { useGetAllCountriesQuery } from "@/redux/services/apiSlice";

export function useCountries() {
	const { data, isLoading, error } = useGetAllCountriesQuery();
	const [search, setSearch] = useState("");
	const [selectRegion, setSelectRegion] = useState("");

	const searchParameters = (query: string, queryRegion: string) => {
		const searchLowerCase = query.toLowerCase();
		return data?.filter(
			({ name: { official }, region }) =>
				official.toLowerCase().includes(searchLowerCase) &&
				region.includes(queryRegion),
		);
	};

	const filteredList = useMemo(() => {
		return searchParameters(search, selectRegion);
	}, [data, search, selectRegion, searchParameters]);

	function resetSearchResult() {
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
		resetSearchResult,
	};
}
