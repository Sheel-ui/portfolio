"use client";
import Title from "./Title";
import { MacbookScroll } from "../ui/macbook-scroll";

export default function About() {
	return (
		<div id="about" className="pt-10 reletive">
			<Title
				text="About Me 👻"
				className="flex flex-col items-center justify-center text-center rotate-6 "
			></Title>
			<div className="overflow-hidden w-full">
				<MacbookScroll showGradient={false} />
			</div>
		</div>
	);
}
