import { useState } from "react";

export function usePagination() {
	const [cardPerPage] = useState(12);
	const [limit, setLimit] = useState(0);
	const skeletons = [...Array(cardPerPage).fill(0)].map(
		(_, index) => index + 1,
	);

	const total = cardPerPage + limit;

	function handleLimit() {
		setLimit((prev) => prev + cardPerPage);
	}

	return {
		total,
		handleLimit,
		skeletons,
	};
}
