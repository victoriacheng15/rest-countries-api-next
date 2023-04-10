interface BaseProps {
	onClick: () => void;
}

interface BaseClasses {
	classes: string;
}

interface ChildrenProps {
	children: React.ReactNode;
}

interface HeaderProps extends BaseProps {
	mode: boolean;
}

interface FromProps extends BaseProps {
	search: string;
	region: string;
	searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectOnChange: (e: ChangeEventHandler<HTMLSelectElement>) => void;
}

interface TitleProps extends BaseClasses {
	title: string;
}

interface TextProps {
	contentTitle: string;
	content: string;
}

interface ButtonProps extends BaseProps, BaseClasses {
	title?: string;
	btnText: React.ReactNode;
}
