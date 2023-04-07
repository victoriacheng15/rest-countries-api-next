interface HeaderProps {
	mode: boolean;
	toggleDark: () => void;
}

interface FromProps {
	onClick: () => void;
	search: string;
	searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	region: string;
	selectOnChange: (e: ChangeEventHandler<HTMLSelectElement>) => void;
}
