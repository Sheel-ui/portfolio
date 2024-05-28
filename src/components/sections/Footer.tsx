import Socials from "./Socials";

export default function Footer() {
	return (
		<nav className="border-t mt-10 py-10 flex flex-col justify-between items-center">
			<h1 className="text-2xl font-bold mb-5 underline underline-offset-8 decoration-green-500 -rotate-2">
				Sheel Taskar 👨🏻‍💻
			</h1>
			<Socials />
		</nav>
	);
}
