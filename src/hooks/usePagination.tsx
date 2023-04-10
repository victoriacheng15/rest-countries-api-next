import { useState } from "react";

export function usePagination() {
	const [limit, setLimit] = useState(12);
	const skeletons = [...Array(limit).fill(0)].map((_, index) => index + 1);

	function handleLimit() {
		setLimit((prevLimit) => prevLimit + 12);
	}

	return {
		limit,
		setLimit,
		handleLimit,
		skeletons,
	};
}
