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
							<div className="ml-4 flex flex-col justify-center">
								<span className="text-[13px] lg:text-[15px]">
									University of Florida
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Master of Science, Computer Science
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									GPA: 4.0/4.0
									<span className="md:hidden">
										{" "}
										• Jan 2023 - Dec 2024
									</span>{" "}
								</span>
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

					<div className="bg-[#101010] h-56 md:h-[28rem] overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 md:bg-black md:border-0 rounded-xl">
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
							<div className="ml-4 flex flex-col justify-center">
								<span className="text-[13px] lg:text-[15px]">
									Senior Software Engineer
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Larsen & Toubro Infotech
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Pune, India{" "}
									<span className="md:hidden">
										{" "}
										• Dec 2021 - Dec 2022
									</span>
								</span>
							</div>
						</div>
						<div className="md:hidden mt-4 text-[13px] tracking-wide text-gray-400">
							Built automated pipelines for extracting and
							processing data, and generating{" "}
							<span className="font-bold text-green-500">
								AI-driven insights
							</span>{" "}
							for 2 major SDLC platforms. <br />
							<br />
							Optimized the APIs by compiling in C, enhanced the
							model for GPU execution, improved response time by
							3x, reduced model size by 75%, and increased
							throughput by 5x, resulting in a{" "}
							<span className="font-bold text-green-500">
								high-performance API
							</span>{" "}
							for accessing the language model. <br />
							<br />
							Implemented{" "}
							<span className="font-bold text-green-500">
								CI/CD pipeline
							</span>{" "}
							with Docker and Jenkins, reducing deployment time by
							50% and enhancing deployment frequency by 3x.
							<br />
							<br />
							Improved vector search time by 1000% via precomputed
							indices, yielding a 10x performance gain in{" "}
							<span className="font-bold text-green-500">
								end-to-end correlation
							</span>{" "}
							service.
							<br />
							<br />
							Engaged in developing a Playground UI to access{" "}
							<span className="font-bold text-green-500">
								language models
							</span>{" "}
							and modify their parameters for 3 different use
							cases. <br />
							<br />
							<span className="font-bold text-green-500">
								Skills:
							</span>{" "}
							Python, Java, Springboot, React, Flask, NLP,
							Transformers, Spacy, Huggingface, BERT, Docker,
							Jenkins, Postman.
						</div>
					</div>

					<div className="bg-[#101010] h-56 md:h-[28rem] overflow-y-auto p-4 border-2 border-gray-600 hover:border-green-700 transistion duration-300 rounded-xl">
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
								<span className="text-[13px] lg:text-[15px]">
									Software Engineer
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Larsen & Toubro Infotech
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Pune, India{" "}
									<span className="md:hidden">
										{" "}
										• Jun 2021 - Dec 2021
									</span>
								</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Designed{" "}
							<span className="font-bold text-green-500">
								Microservice Architecture
							</span>
							, Database Schemas and developed REST APIs,
							wireframes as well as UI for the application.
							<br />
							<br />
							Reduced the page load by 30% with{" "}
							<span className="font-bold text-green-500">
								Server Side Rendering
							</span>{" "}
							resulting in faster load times and a more responsive
							frontend.
							<br />
							<br />
							Automated Swagger UI generation upon detecting
							changes in the Git repository, resulting in a 95%{" "}
							<span className="font-bold text-green-500">
								reduction in manual efforts.
							</span>
							<br />
							<br />
							<span className="font-bold text-green-500">
								Migrated on-premise application
							</span>{" "}
							to the Cloud and setup CI/CD Pipeline, leading to a
							30% decrease in deployment time. <br />
							<br />
							Engineered authentication and authorization
							middleware using Azure AD Single sign-on to
							implement{" "}
							<span className="font-bold text-green-500">
								Role Based Access Control.
							</span>
							<br />
							<br />
							<span className="font-bold text-green-500">
								Skills:
							</span>{" "}
							Angular, Node, Express, PostgreSQL, Liquibase,
							Swagger, Azure, Jest, Active Directory, OAuth 2.0,
							Docker, Postman
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
								<span className="text-[13px] lg:text-[15px]">
									Bitwise Global
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Software Engineering Intern
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									Pune, India{" "}
									<span className="md:hidden">
										{" "}
										• Jan 2021 - Jun 2021
									</span>
								</span>
							</div>
						</div>
						<div className="block md:hidden mt-4 text-[13px] tracking-wide text-gray-400">
							Engaged in ETL operations using Ab Initio and cloud
							migration utilizing Snowflake for the credit card
							company{" "}
							<span className="font-bold text-green-500">
								Discover.
							</span>{" "}
							<br /> <br />
							Transformed over 10TB of{" "}
							<span className="font-bold text-green-500">
								transaction data
							</span>{" "}
							and stored the migration records in a database using
							Java microservices.
							<br /> <br />
							<span className="font-bold text-green-500">
								Skills:
							</span>{" "}
							Shell Scripting, Linux, AWS, Snowflake, Java,
							Springboot, Ab Initio, SQL
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
								<span className="text-[13px] lg:text-[15px]">
									Shri Ramdeobaba College of Engineering
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									B.Tech, Information Technology
								</span>
								<span className="text-gray-300 text-[12px] lg:text-[15px]">
									GPA: 8.51/10
									<span className="md:hidden">
										{" "}
										• Aug 2017 - May 2021
									</span>
								</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							<span className="font-bold text-green-500">
								Major Coursework:
							</span>{" "}
							Data Structures, Algorithms, Object Oriented
							Programming, Database Systems, Computer Networks,
							Operating Systems, Cybersecurity, Compilers
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
							Dec 2021 - Dec 2022
						</span>
					</div>
					<div className="absolute top-[44.3%] whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Jun 2021 - Dec 2021
						</span>
					</div>
					<div className="absolute top-[74.6%]  -translate-x-3 whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2021 - Jun 2021
						</span>
					</div>
					<div className="absolute top-[89.5%] whitespace-nowrap bg-green-700 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Aug 2017 - May 2021
						</span>
					</div>
				</div>

				<div className="hidden md:flex flex-col items-end flex-1 max-w-1/2 space-y-5">
					<div className="h-44"></div>

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
								<span className="text-gray-300">
									Larsen & Toubro Infotech
								</span>
								<span className="text-gray-300">
									Pune, India
								</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Built automated pipelines for extracting and
							processing data, and generating{" "}
							<span className="font-bold text-green-500">
								AI-driven insights
							</span>{" "}
							for 2 major SDLC platforms. <br />
							<br />
							Optimized the APIs by compiling in C, enhanced the
							model for GPU execution, improved response time by
							3x, reduced model size by 75%, and increased
							throughput by 5x, resulting in a{" "}
							<span className="font-bold text-green-500">
								high-performance API
							</span>{" "}
							for accessing the language model. <br />
							<br />
							Implemented{" "}
							<span className="font-bold text-green-500">
								CI/CD pipeline
							</span>{" "}
							with Docker and Jenkins, reducing deployment time by
							50% and enhancing deployment frequency by 3x.
							<br />
							<br />
							Improved vector search time by 1000% via precomputed
							indices, yielding a 10x performance gain in{" "}
							<span className="font-bold text-green-500">
								end-to-end correlation
							</span>{" "}
							service.
							<br />
							<br />
							Engaged in developing a Playground UI to access{" "}
							<span className="font-bold text-green-500">
								language models
							</span>{" "}
							and modify their parameters for 3 different use
							cases. <br />
							<br />
							<span className="font-bold text-green-500">
								Skills:
							</span>{" "}
							Python, Java, Springboot, React, Flask, NLP,
							Transformers, Spacy, Huggingface, BERT, Docker,
							Jenkins, Postman.
						</div>
					</div>

					<div className="h-[28rem]"></div>

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
								<span className="text-gray-300">
									Software Engineering Intern
								</span>
								<span className="text-gray-300">
									Pune, India
								</span>
							</div>
						</div>
						<div className="mt-4 text-[13px] tracking-wide text-gray-400">
							Engaged in ETL operations using Ab Initio and cloud
							migration utilizing Snowflake for the credit card
							company{" "}
							<span className="font-bold text-green-500">
								Discover.
							</span>{" "}
							<br /> <br />
							Transformed over 10TB of{" "}
							<span className="font-bold text-green-500">
								transaction data
							</span>{" "}
							and stored the migration records in a database using
							Java microservices.
							<br /> <br />
							<span className="font-bold text-green-500">
								Skills:
							</span>{" "}
							Shell Scripting, Linux, AWS, Snowflake, Java,
							Springboot, Ab Initio, SQL
						</div>
					</div>

					<div className="h-44"></div>
				</div>
			</div>
		</div>
	);
}
