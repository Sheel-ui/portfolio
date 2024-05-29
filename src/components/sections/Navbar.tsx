import Socials from "./Socials";

export default function Navbar() {
	return (
		<nav className="py-10 flex justify-between items-center animate-move-down">
			<h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
				Sheel Taskar 👨🏻‍💻
			</h1>
			<a href="#about">About Me</a>
			<a href="#skills">Skills</a>
			<a href="#education">Education</a>
			<a href="#education">Experience</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</nav>
	);
}
