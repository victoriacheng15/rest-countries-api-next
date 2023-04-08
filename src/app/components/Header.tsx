import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";

function Header({ mode, toggleDark }: HeaderProps) {
	const buttonText = mode ? <FiSun /> : <FiMoon />;
	const buttonTitle = mode ? "light mode" : "dark mode";

	return (
		<header className="py-8 bg-slate-100 dark:bg-gray-800 dark:text-slate-100">
			<nav className="w-11/12 max-w-6xl mx-auto">
				<ul className="flex items-center justify-between">
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
							className="p-2 text-2xl capitalize duration-300 ease-in-out border-2 border-gray-900 rounded-xl dark:border-slate-100 dark:text-slate-100 hover:bg-gray-900 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-gray-900"
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
