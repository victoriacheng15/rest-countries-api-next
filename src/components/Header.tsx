import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./Button";

function Header({ mode, onClick }: HeaderProps) {
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
						<Button
							onClick={onClick}
							title={buttonTitle}
							btnText={buttonText}
							classes="p-2 text-3xl"
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
