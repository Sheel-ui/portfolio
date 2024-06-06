import Link from "next/link";
import Title from "./Title";
import {
	SiAmazonaws,
	SiAngular,
	SiBootstrap,
	SiCss3,
	SiEjs,
	SiFlask,
	SiFramer,
	SiFsharp,
	SiHtml5,
	SiJavascript,
	SiJson,
	SiMake,
	SiMongodb,
	SiNextdotjs,
	SiNextui,
	SiNodedotjs,
	SiPrisma,
	SiPython,
	SiPytorch,
	SiReact,
	SiRedis,
	SiShadcnui,
	SiSolidity,
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
			title: "CodeShare",
			tech: [
				SiNextdotjs,
				SiNextui,
				SiTailwindcss,
				SiTypescript,
				SiPrisma,
			],
			link: "https://github.com/Sheel-ui/codeshare",
			cover: "/projects/codeshare.jpeg",
			desc: "Tool that enables developers to effortlessly create, share, edit, and manage code snippets with advanced features like Prisma integration, VS Code editor, dynamic paths, caching, and robust error handling.",
			backgound: "border-green-700",
		},
		{
			title: "DevPost",
			tech: [
				SiNextdotjs,
				SiNextui,
				SiTailwindcss,
				SiTypescript,
				SiPrisma,
				SiShadcnui,
				SiFramer,
			],
			link: "https://github.com/Sheel-ui/codeshare",
			cover: "/projects/devpost.png",
			desc: "Application that allows users to create topics, posts and comments, and includes features like OAuth authentication, Prisma integration, recursive nested comments, content streaming, request deduplication.",
			backgound: "border-green-700",
		},
		{
			title: "Simplysync",
			tech: [SiReact, SiJson, SiJavascript],
			link: "https://github.com/Sheel-ui/SimplySync",
			cover: "/projects/simplysync.png",
			desc: "Platform that streamlines team formation for university projects, ensuring better skill matches and cohesion among students. ",
			backgound: "border-green-700",
		},
		{
			title: "3D Audio Playground",
			tech: [SiPython],
			link: "https://github.com/Sheel-ui/3d-audio-playground",
			cover: "/projects/3d.jpeg",
			desc: "Control the positioning of sound sources, select from various HRTFs, adjust sound properties like elevation and observe how audio behaves in real-time.",
			backgound: "border-green-700",
		},
		{
			title: "Chatwave",
			tech: [
				SiReact,
				SiNodedotjs,
				SiMongodb,
				SiAmazonaws,
				SiRedis,
				SiTerraform,
			],
			link: "https://github.com/Sheel-ui/chatwave-backend",
			cover: "/projects/chatwave.png",
			desc: "Full Stack social media application featuring user authentication, password management, posts, post reactions, comments, follower and blocking, private messaging, etc.",
			backgound: "border-green-700",
		},
		{
			title: "GraphViz",
			tech: [
				SiAngular,
				SiBootstrap,
				SiPython,
				SiFlask,
				SiPytorch,
				SiTypescript,
			],
			link: "https://github.com/Sheel-ui/graphviz-frontend",
			cover: "/projects/graph.jpeg",
			desc: "Upload SQL database files in CSV format via an intuitive frontend and query databases using natural language and dynamically visualize results as bar graphs, line graphs, or tables.",
			backgound: "border-green-700",
		},
		{
			title: "Portfolio Website",
			tech: [SiNodedotjs, SiFramer, SiTypescript, SiShadcnui],
			link: "https://github.com/Sheel-ui/portfolio",
			cover: "/projects/portfolio.png",
			desc: "My personal mobile responsive portfolio website built using React and Nextjs.",
			backgound: "border-green-700",
		},
		{
			title: "NoteDown",
			tech: [SiReact, SiJavascript, SiCss3],
			link: "https://github.com/Sheel-ui/note-down",
			cover: "/projects/note-down.jpeg",
			desc: "Note-taking solution where users can create, review, and manage notes, with features like dark/light modes and infinite scroll for smooth navigation.",
			backgound: "border-green-700",
		},
		{
			title: "Code to Text",
			tech: [SiPython, SiJavascript, SiVisualstudiocode, SiFlask],
			link: "https://github.com/Sheel-ui/code-to-text",
			cover: "/projects/code-to-text.png",
			desc: "A Visual Studio Code extension designed to effortlessly generate informative comments for your code files. ",
			backgound: "border-green-700",
		},
		{
			title: "Next Word Prediction",
			tech: [
				SiAngular,
				SiBootstrap,
				SiPython,
				SiFlask,
				SiPytorch,
				SiTypescript,
			],
			link: "https://github.com/Sheel-ui/next-word-backend",
			cover: "/projects/next-word.jpeg",
			desc: "Text auto-completion system designed to enhance user experience across various applications, it anticipates and suggests word sequences as users type.",
			backgound: "border-green-700",
		},
		{
			title: "House Paint Algorithms",
			tech: [SiPython, SiMake],
			link: "House-Painting-Problem",
			cover: "/projects/greedy.png",
			desc: "This repository contains a collection of different greedy algorithms designed to solve the house painting problem.",
			backgound: "border-green-700",
		},
		{
			title: "Node Azure Authentication",
			tech: [SiNodedotjs, SiEjs, SiBootstrap],
			link: "https://github.com/Sheel-ui/node-azure-ad",
			cover: "/projects/node.jpeg",
			desc: "Using passport-azure-ad for authentication using Azure Active directory.",
			backgound: "border-green-700",
		},
		{
			title: "Gator-taxi",
			tech: [FaJava, SiMake],
			link: "https://github.com/Sheel-ui/Gator-Taxi",
			cover: "/projects/gator-taxi.png",
			desc: "A ride-sharing solution using a custom min-heap and Red-Black Tree for optimal ride selection, prioritizing cost and duration, with seamless support for insertion, cancellation, and updates.",
			backgound: "border-green-700",
		},
		{
			title: "HireAChef",
			tech: [SiHtml5, SiCss3],
			link: "https://github.com/Sheel-ui/hireachef",
			cover: "/projects/hireachef.jpeg",
			desc: "Mobile responsive design concept with focus on clean, maintainable code using pure CSS.",
			backgound: "border-green-700",
		},
		{
			title: "Emergency Access Protocol",
			tech: [SiSolidity],
			link: "https://github.com/Sheel-ui/Emergency-Access-Protocol",
			cover: "/projects/eap.png",
			desc: "Emergency access control framework using proof-of-stake to securely grant healthcare organizations immediate access to patients' EMRs in emergencies.",
			backgound: "border-green-700",
		},

		{
			title: "Chord Protocol",
			tech: [SiFsharp],
			link: "https://github.com/Sheel-ui/Chord-Protocol",
			cover: "/projects/chord.png",
			desc: "An F# implementation of the Chord protocol for efficient, scalable distributed hash table (DHT) management.",
			backgound: "border-green-700",
		},
		{
			title: "Gossip Algorithm",
			tech: [SiFsharp],
			link: "https://github.com/Sheel-ui/Gossip-Algorithm",
			cover: "/projects/gossip.png",
			desc: "A project implementing the gossip algorithm in F# for efficient and reliable information dissemination across distributed systems.",
			backgound: "border-green-700",
		},
		{
			title: "Tree Plantation Algorithms",
			tech: [SiPython, SiMake],
			link: "https://github.com/Sheel-ui/Tree-Plantation-Problem",
			cover: "/projects/dp.jpeg",
			desc: "This repository contains a collection of different dynamic programing algorithms designed to solve the tree plantation problem.",
			backgound: "border-green-700",
		},
	];
	return (
		<div id="projects" className="pt-10 mt-10 px-5 sm:px-0">
			<Title
				text="Projects 🎨"
				className="flex flex-col items-center justify-center text-center rotate-6"
			></Title>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 md:px-10 lg:px-15 xl:px-20 gap-4 sm:gap-6 lg:gap-8">
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
									imageClassName="opacity-40 sm:opacity-90"
								>
									<div className="space-y-2">
										<h1 className="text-sm font-bold">
											{project.title}
										</h1>
										<p className="text-xs tracking-tighter pr-6">
											{project.desc}
										</p>
										<div className="flex items-center gap-5">
											{project.tech.map((skill, idx) => {
												const Icon = skill;
												return (
													<Icon
														className="size-4"
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
