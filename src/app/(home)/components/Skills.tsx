"use client";

import { CardHover } from "@/components/ui/card-hover";
import Title from "./Title";
import { SiAmazonaws, SiAngular, SiDocker, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSpring, SiSpringboot, SiTypescript } from "react-icons/si";

export default function Hero() {
    const skills = [
        {
            text: "React",
            icon: SiReact
        },
        {
            text: "Nodejs",
            icon: SiNodedotjs
        },
        {
            text: "Java",
            icon: SiSpringboot
        },
        {
            text: "Anugular",
            icon: SiAngular
        },
        {
            text: "Git",
            icon: SiGit
        },
        {
            text: "javascript",
            icon: SiJavascript
        },
        {
            text: "Python",
            icon: SiPython
        },
        {
            text: "Nextjs",
            icon: SiNextdotjs
        },
        {
            text: "Postgresql",
            icon: SiPostgresql
        },
        {
            text: "MongoDB",
            icon: SiMongodb
        },
        {
            text: "Aws",
            icon: SiAmazonaws
        },
        {
            text: "Docker",
            icon: SiDocker
        }
    ]
	return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 🔪" className="flex flex-col items-center justify-center text-center -rotate-6"></Title>
            <CardHover items={skills} />
        </div>
	);
}