import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";
export default function Socials() {
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
		<div className="flex items-center gap-5">
			{socials.map((social) => {
				const Icon = social.icon;
				return (
					<Link
						href={social.link}
						key={social.label}
						aria-label={social.label}
					>
						<Icon className="size-5 hover:scale-125 transition-all" />
					</Link>
				);
			})}
		</div>
	);
}
