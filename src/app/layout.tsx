"use client";
import { useReducer } from "react";
import { Providers } from "../redux/provider";
import Header from "./components/Header";
import "./globals.css";

const metadata = {
	title: "Rest Countries API - Next.js",
	description: "A country information app built with Next.js and Tailwind CSS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [darkMode, setDarkMode] = useReducer(
		(prevMode: boolean) => !prevMode,
		false,
	);

	return (
		<html lang="en">
			<head>
				<meta name="description" content={metadata.description} />
				<title>{metadata.title}</title>
			</head>
			<body className={`${darkMode ? "dark" : "light"}`}>
				<Header mode={darkMode} toggleDark={setDarkMode} />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
