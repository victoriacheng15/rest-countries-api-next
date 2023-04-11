function CardSkeleton() {
	return (
		<article
			data-testid="skeleton"
			className="h-[356px] w-full overflow-hidden border-2 border-gray-700 dark:border-slate-100 rounded-lg"
		>
			<div className="w-full h-[180px] bg-gray-300" />
			<div className="p-3 space-y-4">
				<div className="w-full h-8 bg-gray-300" />
				<div className="h-6 bg-gray-300" />
				<div className="h-6 bg-gray-300" />
				<div className="h-6 bg-gray-300" />
			</div>
		</article>
	);
}

export default CardSkeleton;
