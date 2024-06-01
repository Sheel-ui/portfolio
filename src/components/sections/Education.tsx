import Title from "./Title";
import Image from "next/image";

export default function Education() {
	return (
		<div id="education" className="">
			<Title
				text="Education 📚 & Experience 💻"
				className="flex flex-col items-center justify-center text-center rotate-3"
			></Title>
			<div className="flex w-full justify-center mt-16">
				<div className="flex flex-col items-end flex-1 max-w-1/2 space-y-5">
					<div className="bg-[#101010] h-44 overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
						<div className="flex">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/uf.png"
									width={50}
									height={50}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="uf"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>University of Florida</span>
								<span>Master of Science, Computer Science</span>
								<span>GPA: 4.0/4.0</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							<span className="font-bold text-green-500">
								Major Coursework:
							</span>{" "}
							Analysis of Algorithm, Advanced Data Structures,
							Distributed Operating System Principles, Human
							Computer Interaction, Software Engineering
						</div>
					</div>

					<div className="bg-[#101010] h-[28rem] overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 md:bg-black md:border-0 rounded-xl">
						<div className="flex md:hidden">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/lnt.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="lnt"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>Senior Software Engineer</span>
								<span>Larsen & Toubro Infotech</span>
								<span>Pune, India</span>
							</div>
						</div>
						<div className="md:hidden mt-4 text-[13px] tracking-wide text-gray-400">
							Worked on building automated pipelines for
							extracting, processing, embedding text data from 2
							major SDLC platforms. <br />
							<br />
							Developed and deployed 50+ REST APIs to access the
							ML models, maintained postman collection and
							documented the APIs. <br />
							<br />
							Implemented ML models for 4 use cases: Text
							Clustering, Correlation, Summarization and Semantic
							Search Engine. <br />
							<br />
							Written 100+ parsers to parse user queries in
							natural language, and generated visualizations and
							insights based on user queries. <br />
							<br />
							Trained Huggingface language models on SDLC, and
							authored pipeline for finetuning the models on
							continuous data streams. <br />
							<br />
							Skills: Python, Flask, NLP, Angular, Pandas, NLTK,
							NumPy, Jupyter, Transformers, Spacy, Huggingface,
							BERT, Docker, Postman.
						</div>
					</div>

					<div className="bg-[#101010] h-[28rem] overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
						<div className="flex">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/lnt.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="lnt"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>Software Engineer</span>
								<span>Larsen & Toubro Infotech</span>
								<span>Pune, India</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Designed Microservice Architecture, Database Schemas
							and developed REST APIs, wireframes as well as UI
							for the application.
							<br />
							<br />
							Automated Swagger UI generation upon detecting
							changes in the Git repository, resulting in a 95%
							reduction in manual efforts.
							<br />
							<br />
							Migrated on-premise application to the Cloud and
							setup CI/CD Pipeline, leading to a 30% decrease in
							deployment time.
							<br />
							<br />
							Engineered authentication and authorization
							middleware using Azure AD Single sign-on to
							implement Rule Based Access Control. <br />
							<br />
							Managed Logic Apps, Power Virtual Agent, and Power
							Automate in Azure, resulting in a 20% increase in
							workflow automation. <br />
							<br />
							Skills: Angular, Node, Express, PostgreSQL,
							Liquibase, Swagger, Azure, Chatbot, Active
							Directory, OAuth 2.0, Docker, Postman
						</div>
					</div>

					<div className="bg-[#101010] overflow-y-auto h-56 p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl md:bg-black md:border-0">
						<div className="flex md:hidden">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/bitwise.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="bitwise"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>Bitwise Global</span>
								<span>Software Engineering Intern</span>
								<span>Pune, India</span>
							</div>
						</div>
						<div className="block md:hidden mt-4 text-[13px] tracking-wide text-gray-400">
							Contributed to Extract, Transform, Load (ETL)
							operations with Ab Initio and actively participated
							in cloud migration using AWS. <br /> <br />Engaged
							in Linux and Shell Scripting tasks, ensuring smooth
							integration of C++ components within the data
							processing pipeline.
						</div>
					</div>

					<div className="bg-[#101010] h-44 overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
						<div className="flex">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/rtmnu.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="rtmnu"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>
									Shri Ramdeobaba College of Engineering
								</span>
								<span>B.Tech, Information Technology</span>
								<span>GPA: 8.51/10</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Major Coursework: Data Structures, Algorithms,
							Object Oriented Programming, Database Systems,
							Computer Networks, Operating Systems, Cybersecurity,
							Compilers
						</div>
					</div>
				</div>

				<div className="hidden md:block relative bg-green-700 rounded-full w-1 mx-8 flex flex-col items-center text-sm">
					<div className="absolute top-[0.7%]  whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Jan 2023 - Dec 2024
						</span>
					</div>
					<div className="absolute top-[13.5%] -translate-x-3 whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2022 - Dec 2022
						</span>
					</div>
					<div className="absolute top-[44.3%] whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							July 2021 - Jan 2022
						</span>
					</div>
					<div className="absolute top-[74.6%]  -translate-x-3 whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2021 - Jul 2021
						</span>
					</div>
					<div className="absolute top-[89.5%] whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Aug 2017 - May 2021
						</span>
					</div>
				</div>

				<div className="hidden md:flex flex-col items-end flex-1 max-w-1/2 space-y-5">
					<div className="h-44">
					</div>

					<div className="bg-[#101010] h-[28rem] overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
						<div className="flex">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/lnt.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="lnt"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>Senior Software Engineer</span>
								<span>Larsen & Toubro Infotech</span>
								<span>Pune, India</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Worked on building automated pipelines for
							extracting, processing, embedding text data from 2
							major SDLC platforms. <br />
							<br />
							Developed and deployed 50+ REST APIs to access the
							ML models, maintained postman collection and
							documented the APIs. <br />
							<br />
							Implemented ML models for 4 use cases: Text
							Clustering, Correlation, Summarization and Semantic
							Search Engine. <br />
							<br />
							Written 100+ parsers to parse user queries in
							natural language, and generated visualizations and
							insights based on user queries. <br />
							<br />
							Trained Huggingface language models on SDLC, and
							authored pipeline for finetuning the models on
							continuous data streams. <br />
							<br />
							Skills: Python, Flask, NLP, Angular, Pandas, NLTK,
							NumPy, Jupyter, Transformers, Spacy, Huggingface,
							BERT, Docker, Postman.
						</div>
					</div>

					<div className="h-[28rem]">
					</div>

					<div className="bg-[#101010] overflow-y-auto h-56 p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
						<div className="flex">
							<div className="flex items-center justify-center">
								<Image
									src="/logo/bitwise.png"
									width={80}
									height={80}
									className="rounded-full size-16 border-2 border-black object-cover"
									alt="bitwise"
								/>
							</div>
							<div className="ml-4 flex flex-col justify-center text-[13px] lg:text-[15px]">
								<span>Bitwise Global</span>
								<span>Software Engineering Intern</span>
								<span>Pune, India</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Contributed to Extract, Transform, Load (ETL)
							operations with Ab Initio and actively participated
							in cloud migration using AWS. <br /> <br />Engaged
							in Linux and Shell Scripting tasks, ensuring smooth
							integration of C++ components within the data
							processing pipeline.
						</div>
					</div>

					<div className="h-44">
					</div>
				</div>
			</div>
		</div>
	);
}
