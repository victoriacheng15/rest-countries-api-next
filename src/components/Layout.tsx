function Layout({ children, isMain = true }: LayoutProps) {
	return (
		<>
			{isMain ? (
				<main className="min-h-[calc(100vh-56px-108px)] py-16 bg-slate-50 dark:bg-gray-700">
					{children}
				</main>
			) : (
				<div className="w-11/12 max-w-6xl mx-auto">{children}</div>
			)}
		</>
	);
}

export default Layout;
