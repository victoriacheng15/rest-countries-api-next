import React from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

function Footer() {
	return (
		<footer className="py-4 bg-slate-100 dark:bg-gray-800 dark:text-slate-100">
			<p className="flex items-center justify-center gap-2">
				Coded by Victoria{" "}
				<SocialIcon
					href="https://github.com/victoriacheng15/rest-countries-next#readme"
					icon={<SiGithub />}
				/>{" "}
				|{" "}
				<SocialIcon
					href="https://www.linkedin.com/in/victoriacheng15/"
					icon={<SiLinkedin />}
				/>{" "}
				|{" "}
				<SocialIcon
					href="https://twitter.com/viktoriacheng15"
					icon={<SiTwitter />}
				/>{" "}
			</p>
		</footer>
	);
}

export default Footer;

function SocialIcon({
	href,
	icon,
}: {
	href: string;
	icon: React.ReactNode;
}) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			{icon}
		</a>
	);
}
