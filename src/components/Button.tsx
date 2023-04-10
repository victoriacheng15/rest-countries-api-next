function Button({
	onClick,
	btnText,
	title,
	classes,
}: {
	onClick: () => void;
	btnText: React.ReactNode;
	title?: string;
	classes: string;
}) {
	return (
		<button
			type="button"
			title={title}
			onClick={onClick}
			className={`${classes} capitalize duration-300 ease-in-out border-2 border-gray-900 rounded-xl dark:border-slate-100 dark:text-slate-100 hover:bg-gray-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-gray-900`}
		>
			{btnText}
		</button>
	);
}

export default Button;
