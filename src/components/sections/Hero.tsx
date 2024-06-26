import Link from "next/link";
import Title from "./Title";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
    const words = ["FullStack.", "Databases.", "Web Development.", "Restful APIs.", "Cloud."];
	const heroText = "I thrive on learning and adapting to new technologies to stay current with industry trends and building end-to-end applications with clean, maintainable code to solve complex problems brings me immense joy."
	return (
		<div className="min-h-[60vh] flex gap-14 flex-col-reverse lg: gap-0 lg:flex-row items-center justify-between animate-move-up">
			<div className="space-y-10 text-center lg:text-left">
				<h1 className="text-3xl lg:text-6xl font-bold mt-10 lg:mt-0">
					Nice to meet you! 👋 <br />{" "}
					<span className="underline underline-offset-8 decoration-green-500">
						<FlipWords words={words} />
					</span>
				</h1>
				<p className="lg:w-3/4 text-md text-gray-300">
					{heroText}
				</p>
				<Link
					href={process.env.RESUME || "" }
					className="inline-block"
				>
					<Title text="Resume 📃" className="flex flex-col items-center justify-center text-center"></Title>
				</Link>
			</div>
			<div className="relative">
				<div className="size-64 space-y-3 -rotate-[30deg] relative">
					<div className="flex gap-3 translate-x-8">
						<div className="size-32 rounded-2xl bg-green-500"></div>
						<div className="size-32 rounded-full bg-indigo-500"></div>
					</div>
					<div className="flex gap-3 -translate-x-8">
						<div className="size-32 rounded-2xl bg-indigo-500"></div>
						<div className="size-32 rounded-full bg-green-500"></div>
					</div>
					<div className="glow absolute top-[40%] right-1/2 -z-10"></div>
				</div>
			</div>
		</div>
	);
}
