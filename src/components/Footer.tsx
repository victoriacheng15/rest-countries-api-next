import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

function Footer() {
	return (
		<footer className="py-4 bg-slate-200 dark:bg-gray-800 dark:text-slate-100">
			<p className="flex items-center justify-center gap-2">
				Coded by Victoria{" "}
				<SocialIcon
					label="github"
					href="https://github.com/victoriacheng15/rest-countries-next#readme"
					icon={<SiGithub />}
				/>{" "}
				|{" "}
				<SocialIcon
					label="Linkedin"
					href="https://www.linkedin.com/in/victoriacheng15/"
					icon={<SiLinkedin />}
				/>{" "}
				|{" "}
				<SocialIcon
					label="Twitter"
					href="https://twitter.com/viktoriacheng15"
					icon={<SiTwitter />}
				/>{" "}
			</p>
		</footer>
	);
}

export default Footer;

function SocialIcon({ href, icon, label }: SocialIconProps) {
	return (
		<a aria-label={label} href={href} target="_blank" rel="noreferrer">
			{icon}
		</a>
	);
}
