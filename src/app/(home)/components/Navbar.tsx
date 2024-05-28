import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar() {
	const socials = [
		{
			link: "https://www.linkedin.com/in/sheel-taskar/",
			label: "Linkedin",
			icon: SiLinkedin,
		},
		{
			link: "https://github.com/sheel-ui/",
			label: "Github",
			icon: SiGithub,
		},
		{
			link: "https://www.instagram.com/niche_432",
			label: "Instagram",
			icon: SiInstagram,
		},
	];

	return (
		<nav className="py-10 flex justify-between items-center animate-move-down">
			<h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Sheel Taskar 👨🏻‍💻</h1>
			<div className="flex items-center gap-5">
				{socials.map((social) => {
					const Icon = social.icon;
					return (
						<Link
							href={social.link}
							key={social.label}
							aria-label={social.label}
						>
							<Icon className="size-5 hover:scale-125 transition-all"/>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
