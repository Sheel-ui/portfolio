import Link from "next/link";
import Title from "./Title";
import {
	SiAmazonaws,
	SiAngular,
	SiBootstrap,
	SiCss3,
	SiDocker,
	SiEjs,
	SiFlask,
	SiFramer,
	SiFsharp,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiJson,
	SiMake,
	SiMongodb,
	SiNextdotjs,
	SiNextui,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiPytorch,
	SiReact,
	SiRedis,
	SiShadcnui,
	SiSolidity,
	SiSpring,
	SiSpringboot,
	SiTailwindcss,
	SiTerraform,
	SiTypescript,
    SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { DirectionHover } from "@/components/ui/direction-hover";

export default function Projects() {
	const projects = [
        {
			title: "3D Audio Playground",
			tech: [SiPython],
			link: "https://github.com/Sheel-ui/3d-audio-playground",
			cover: "/projects/3d.png",
			backgound: "border-green-700",
		},
		{
			title: "Chatwave",
			tech: [SiReact, SiNodedotjs, SiMongodb, SiAmazonaws, SiRedis, SiTerraform],
			link: "https://github.com/Sheel-ui/chatwave-backend",
			cover: "/projects/chatwave.png",
			backgound: "border-green-700",
        },
		{
			title: "Chord Protocol",
			tech: [SiFsharp],
			link: "https://github.com/Sheel-ui/Chord-Protocol",
			cover: "/projects/chord.png",
			backgound: "border-green-700",
        },
        {
			title: "CodeShare",
			tech: [SiNextdotjs, SiNextui, SiTailwindcss, SiTypescript, SiPrisma],
			link: "https://github.com/Sheel-ui/codeshare",
			cover: "/projects/codeshare.png",
			backgound: "border-green-700",
        },
        {
			title: "DevPost",
			tech: [SiNextdotjs, SiNextui, SiTailwindcss, SiTypescript, SiPrisma, SiShadcnui, SiFramer],
			link: "https://github.com/Sheel-ui/codeshare",
			cover: "/projects/devpost.png",
			backgound: "border-green-700",
        },
        {
			title: "House Paint Algorithms",
			tech: [SiPython, SiMake],
			link: "House-Painting-Problem",
			cover: "/projects/dp.png",
			backgound: "border-green-700",
        },
        {
			title: "Emergency Access Protocol",
			tech: [SiSolidity],
			link: "https://github.com/Sheel-ui/Emergency-Access-Protocol",
			cover: "/projects/eap.png",
			backgound: "border-green-700",
        },
        {
			title: "Code to Text",
			tech: [SiPython, SiJavascript, SiVisualstudiocode, SiFlask],
			link: "https://github.com/Sheel-ui/code-to-text",
			cover: "/projects/code-to-text.png",
			backgound: "border-green-700",
        },
        {
			title: "Gator-taxi",
			tech: [FaJava, SiMake],
			link: "https://github.com/Sheel-ui/Gator-Taxi",
			cover: "/projects/gator-taxi.png",
			backgound: "border-green-700",
        },
        {
			title: "Gossip Algorithm",
			tech: [SiFsharp],
			link: "https://github.com/Sheel-ui/Gossip-Algorithm",
			cover: "/projects/gossip.png",
			backgound: "border-green-700",
        },
        {
			title: "GraphViz",
			tech: [SiAngular, SiBootstrap, SiPython, SiFlask, SiPytorch, SiTypescript],
			link: "https://github.com/Sheel-ui/graphviz-frontend",
			cover: "/projects/graph.png",
			backgound: "border-green-700",
        },
        {
			title: "Tree Plantation Algorithms",
			tech: [SiPython, SiMake],
			link: "https://github.com/Sheel-ui/Tree-Plantation-Problem",
			cover: "/projects/greedy.png",
			backgound: "border-green-700",
        },
        {
			title: "HireAChef",
			tech: [SiHtml5, SiCss3],
			link: "https://github.com/Sheel-ui/hireachef",
			cover: "/projects/hireachef.png",
			backgound: "border-green-700",
        },
        {
			title: "Next Word Prediction",
			tech: [SiAngular, SiBootstrap, SiPython, SiFlask, SiPytorch, SiTypescript],
			link: "https://github.com/Sheel-ui/next-word-backend",
			cover: "/projects/next-word.png",
			backgound: "border-green-700",
        },
        {
			title: "Node Azure Authentication",
			tech: [SiNodedotjs, SiEjs, SiBootstrap],
			link: "https://github.com/Sheel-ui/node-azure-ad",
			cover: "/projects/node.png",
			backgound: "border-green-700",
        },
        {
			title: "NoteDown",
			tech: [SiReact, SiJavascript, SiCss3],
			link: "https://github.com/Sheel-ui/note-down",
			cover: "/projects/note-down.png",
			backgound: "border-green-700",
        },
        {
			title: "Portfolio Website",
			tech: [SiNodedotjs, SiFramer, SiTypescript, SiShadcnui],
			link: "https://github.com/Sheel-ui/portfolio",
			cover: "/projects/portfolio.png",
			backgound: "border-green-700",
        },
        {
			title: "Simplysync",
			tech: [SiReact, SiJson, SiJavascript],
			link: "https://github.com/Sheel-ui/SimplySync",
			cover: "/projects/simplysync.png",
			backgound: "border-green-700",
        },
	];
	return (
		<div id="projects" className="pt-10 px-5 sm:px-0">
			<Title
				text="Projects 🎨"
				className="flex flex-col items-center justify-center text-center rotate-6"
			></Title>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-20 md:px-10 lg:px-15 xl:px-20 gap-4 sm:gap-6 lg:gap-8">
				{projects.map((project) => {
					return (
						<Link href={project.link} key={project.title}>
							<div
								className={cn(
									`border-2 rounded-xl overflow-hidden ${project.backgound}`,
                                    "bg-black"
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
