import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";
export default function Footer() {
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
			link: "mailto:sheeltaskar64@gmail.com",
			label: "Gmail",
			icon: SiGmail,
		},
	];
	return (
		<nav className="border-t mt-10 py-10 flex flex-col justify-between items-center">
			<h1 className="text-2xl font-bold mb-5 underline underline-offset-8 decoration-green-500 -rotate-2">Sheel Taskar 👨🏻‍💻</h1>
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
