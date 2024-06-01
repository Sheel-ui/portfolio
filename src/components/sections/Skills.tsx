"use client";

import { CardHover } from "@/components/ui/card-hover";
import Title from "./Title";
import {
	SiAmazonaws,
	SiAngular,
	SiDocker,
	SiGit,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSpringboot,
	SiTypescript,
    SiTailwindcss,
    SiCplusplus
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function Hero() {
	const skills = [
		{
			text: "React",
			icon: SiReact,
		},
		{
			text: "Nodejs",
			icon: SiNodedotjs,
		},
		{
			text: "Java",
			icon: FaJava,
		},
		{
			text: "Python",
			icon: SiPython,
		},
		{
			text: "SpringBoot",
			icon: SiSpringboot,
		},
		{
			text: "Git",
			icon: SiGit,
		},
		{
            text: "C++",
            icon: SiCplusplus
        },
		{
			text: "javascript",
			icon: SiJavascript,
		},
		{
			text: "Anugular",
			icon: SiAngular,
		},
		{
			text: "Nextjs",
			icon: SiNextdotjs,
		},
		{
			text: "Tailwind",
			icon: SiTailwindcss,
		},
		{
			text: "Postgresql",
			icon: SiPostgresql,
		},
		{
			text: "MongoDB",
			icon: SiMongodb,
		},
		{
			text: "Aws",
			icon: SiAmazonaws,
		},
		{
			text: "Docker",
			icon: SiDocker,
		}
	];
    
	return (
		<div id="skills" className="max-w-5xl mx-auto px-8 pt-10">
			<Title
				text="Skills 🔪"
				className="flex flex-col items-center justify-center text-center -rotate-6"
			></Title>
			<CardHover items={skills} />
		</div>
	);
}
