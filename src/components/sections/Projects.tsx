import Link from "next/link";
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
	SiSpring,
	SiSpringboot,
	SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { DirectionHover } from "@/components/ui/direction-hover";

export default function Projects() {
	const projects = [
		{
			title: "project1",
			tech: [SiAngular, SiDocker, SiGit, SiJavascript],
			link: "https://www.github.com/Sheel-ui",
			cover: "/b.png",
			backgound: "bg-green-500",
		},
		{
			title: "project1",
			tech: [SiAngular, SiDocker, SiGit, SiJavascript],
			link: "https://www.github.com/Sheel-ui",
			cover: "/a.png",
			backgound: "bg-indigo-500",
		},
		{
			title: "project1",
			tech: [SiAngular, SiDocker, SiGit, SiJavascript],
			link: "https://www.github.com/Sheel-ui",
			cover: "/b.png",
			backgound: "bg-green-500",
		},
		{
			title: "project1",
			tech: [SiAngular, SiDocker, SiGit, SiJavascript],
			link: "https://www.github.com/Sheel-ui",
			cover: "/a.png",
			backgound: "bg-indigo-500",
		},
		{
			title: "project1",
			tech: [SiAngular, SiDocker, SiGit, SiJavascript],
			link: "https://www.github.com/Sheel-ui",
			cover: "/b.png",
			backgound: "bg-green-500",
		},
	];
	return (
		<div className="py-10 p-5 sm:p-0">
			<Title
				text="Projects 🎨"
				className="flex flex-col items-center justify-center text-center rotate-6"
			></Title>

			<div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
				{projects.map((project) => {
					return (
						<Link href={project.link} key={project.title}>
							<div
								className={cn(
									"p-5 rounded-md",
									project.backgound
								)}
							>
								<DirectionHover
									imageUrl={project.cover}
									className="w-full cursor-pointer"
								>
									<div className="space-y-5">
										<h1 className="text-2xl font-bold">
											{project.title}
										</h1>
										<div className="flex items-center gap-5">
											{project.tech.map((skill, idx) => {
												const Icon = skill;
												return (
													<Icon
														className="size-8"
														key={idx}
													/>
												);
											})}
										</div>
									</div>
								</DirectionHover>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}