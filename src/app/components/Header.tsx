import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

function Header({ mode, toggleDark }: HeaderProps) {
	const buttonText = mode ? <FiSun /> : <FiMoon />;
	const buttonTitle = mode ? "light mode" : "dark mode";

	return (
		<header className="py-8 bg-slate-100 dark:bg-gray-800 dark:text-slate-100">
			<nav className="w-11/12 max-w-7xl mx-auto">
				<ul className="flex justify-between items-center">
					<li>
						<Link href="/">
							<h1 className="text-3xl">Where in the World?</h1>
						</Link>
					</li>
					<li>
						<button
							type="button"
							onClick={toggleDark}
							title={buttonTitle}
							className="border-2 p-2 rounded-xl border-gray-900 dark:border-slate-100 capitalize text-2xl"
						>
							{buttonText}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
