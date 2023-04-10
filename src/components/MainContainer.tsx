function MainContainer({ children }: ChildrenProps) {
	return (
		<main className="min-h-[calc(100vh-56px-108px)] py-16 bg-slate-50 dark:bg-gray-700">
			{children}
		</main>
	);
}

export default MainContainer;
