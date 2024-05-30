"use client";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
	return (
		<div id="education" className="my-16">
			<Title
				text="Education 📚 & Experience 💻"
				className="flex flex-col items-center justify-center text-center rotate-3"
			></Title>
			<div className="flex w-full justify-center mt-16">
				<div className="flex flex-col items-end flex-1 max-w-1/2">
					<AnimatePresence>
						<motion.div
							initial={{ x: -300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-full rounded-3xl bg-[#101010] border border-gray-800 text-gray-300 mb-10 p-4"
						>
							<div className="flex">
								<Image
									src="/logo/uf.png"
									width={80}
									height={80}
									className="rounded-full border border-slate-400 object-cover"
									alt="uf"
								/>
								<div className="ml-4 flex flex-col justify-center">
									<span>University of Florida</span>
									<span>
										Master of Science, Computer Science
									</span>
									<span>GPA: 4.0/4.0</span>
								</div>
							</div>
							<div className="mt-4">
								Major Coursework: Analysis of Algorithm,
								Advanced Data Structures, Distributed Operating
								System Principles, Human Computer Interaction,
								Software Engineering
							</div>
						</motion.div>
					</AnimatePresence>
					<div className="h-96 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: -300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="h-96 w-full rounded-3xl bg-[#101010] border border-gray-800 text-gray-300 mb-10 p-4 overflow-y-auto"
						>
							<div className="flex">
								<Image
									src="/logo/lnt.png"
									width={80}
									height={80}
									className="rounded-full border border-slate-400 object-cover"
									alt="lnt"
								/>
								<div className="ml-4 flex flex-col justify-center">
									<span>Software Engineer</span>
									<span>Larsen & Toubro Infotech</span>
									<span>Pune, India</span>
								</div>
							</div>
							<div className="mt-4 text-xs text-gray-300">
								• Designed Microservice Architecture, Database
								Schemas and developed REST APIs, wireframes as
								well as UI for the application.
								<br />
								<br />
								• Automated Swagger UI generation upon detecting
								changes in the Git repository, resulting in a
								95% reduction in manual efforts.
								<br />
								<br />
								• Migrated on-premise application to the Cloud
								and setup CI/CD Pipeline, leading to a 30%
								decrease in deployment time.
								<br />
								<br />
								• Engineered authentication and authorization
								middleware using Azure AD Single sign-on to
								implement Rule Based Access Control. <br />
								<br />
								• Managed Logic Apps, Power Virtual Agent, and
								Power Automate in Azure, resulting in a 20%
								increase in workflow automation. <br />
								<br />• Skills: Angular, Node, Express,
								PostgreSQL, Liquibase, Swagger, Azure, Chatbot,
								Active Directory, OAuth 2.0, Docker, Postman
							</div>
						</motion.div>
					</AnimatePresence>
					<div className="h-56 w-full bg-transparent"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: -300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className=" w-full rounded-3xl bg-[#101010] border border-gray-800 text-gray-300 mb-10 p-4"
						>
							<div className="flex">
								<Image
									src="/logo/rtmnu.png"
									width={80}
									height={80}
									className="rounded-full border border-slate-400 object-cover"
									alt="rtmnu"
								/>
								<div className="ml-4 flex flex-col justify-center">
									<span>
										Shri Ramdeobaba College of Engineering
									</span>
									<span>
										B.Tech, Information
										Technology
									</span>
									<span>GPA: 8.51/10</span>
								</div>
							</div>
							<div className="mt-4">
								Major Coursework: Data Structures, Algorithms,
								Object Oriented Programming, Database Systems,
								Computer Networks, Operating Systems,
								Cybersecurity, Compilers
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className="relative bg-green-500 rounded-full w-1 mx-8 flex flex-col items-center">
					<div className="absolute top-[1%] text-lg whitespace-nowrap bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							jan 2023 - Dec 2024
						</span>
					</div>
					<div className="absolute top-[16%] text-lg whitespace-nowrap bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2022 - Dec 2022
						</span>
					</div>
					<div className="absolute top-[44%] text-lg whitespace-nowrap bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							July 2021 - Jan 2022
						</span>
					</div>
					<div className="absolute top-[70%] text-lg whitespace-nowrap bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2021 - Jul 2021
						</span>
					</div>
					<div className="absolute top-[85%] text-lg whitespace-nowrap bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">Aug 2017</span>
					</div>
				</div>

				<div className="flex flex-col items-start flex-1 max-w-1/2">
					<div className="h-48 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: 300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="h-96 w-full rounded-3xl bg-[#101010] border border-gray-800 text-gray-300 mb-10 p-4 overflow-y-auto"
						>
							<div className="flex">
								<Image
									src="/logo/lnt.png"
									width={80}
									height={80}
									className="rounded-full border border-slate-400 object-cover"
									alt="lnt"
								/>
								<div className="ml-4 flex flex-col justify-center">
									<span>Senior Software Engineer</span>
									<span>Larsen & Toubro Infotech</span>
									<span>Pune, India</span>
								</div>
							</div>
							<div className="mt-4 text-xs text-gray-400">
								• Worked on building automated pipelines for
								extracting, processing, embedding text data from
								2 major SDLC platforms. <br />
								<br />
								• Developed and deployed 50+ REST APIs to access
								the ML models, maintained postman collection and
								documented the APIs. <br />
								<br />
								• Implemented ML models for 4 use cases: Text
								Clustering, Correlation, Summarization and
								Semantic Search Engine. <br />
								<br />
								• Written 100+ parsers to parse user queries in
								natural language, and generated visualizations
								and insights based on user queries. <br />
								<br />
								• Trained Huggingface language models on SDLC,
								and authored pipeline for finetuning the models
								on continuous data streams. <br />
								<br />• Skills: Python, Flask, NLP, Angular,
								Pandas, NLTK, NumPy, Jupyter, Transformers,
								Spacy, Huggingface, BERT, Docker, Postman.
							</div>
						</motion.div>
					</AnimatePresence>
					<div className="h-96 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: 300, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-full rounded-3xl bg-[#101010] border border-gray-800 text-gray-300 p-4"
						>
							<div className="flex">
								<Image
									src="/logo/bitwise.png"
									width={80}
									height={80}
									className="rounded-full border border-red-900 object-cover"
									alt="bitwise"
								/>
								<div className="ml-4 flex flex-col justify-center">
									<span>Bitwise Global</span>
									<span>Software Engineering Intern</span>
									<span>Pune, India</span>
								</div>
							</div>
							<div className="mt-4 text-xs text-gray-300">
								• Contributed to Extract, Transform, Load (ETL)
								operations with Ab Initio and actively
								participated in cloud migration using AWS.{" "}
								<br /> <br />• Engaged in Linux and Shell
								Scripting tasks, ensuring smooth integration of
								C++ components within the data processing
								pipeline.
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
