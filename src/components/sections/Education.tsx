"use client";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
	return (
		<div className="my-16">
			<Title
				text="Education 📚 & Experience 💻"
				className="flex flex-col items-center justify-center text-center rotate-3"
			></Title>
			<div className="flex w-full justify-center mt-16">
				<div className="flex flex-col items-end flex-1 max-w-1/2">
					<AnimatePresence>
						<motion.div
							initial={{ x: -500, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							className="h-96 w-full rounded-3xl bg-slate-900 mb-10"
						></motion.div>
					</AnimatePresence>
					<div className="h-96 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: -500, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							className="h-96 w-full rounded-3xl bg-slate-900 mb-10"
						></motion.div>
					</AnimatePresence>
					<div className="h-96 w-full bg-transparent"></div>
				</div>

				<div className="relative bg-green-500 rounded-full w-1 mx-8 flex flex-col items-center">
					<div className="text-xl whitespace-nowrap absolute top-0 transform translate-y-[15px] bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Jan 2023 - Dec 2024
						</span>
					</div>
					<div className="absolute text-xl whitespace-nowrap top-1/4 transform translate-y-[25px] bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2023 - Dec 2024
						</span>
					</div>
					<div className="absolute text-xl whitespace-nowrap top-1/2 transform translate-y-[35px] bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="translate-x-1/2 px-4">
							Jan 2023 - Dec 2024
						</span>
					</div>
					<div className="absolute text-xl whitespace-nowrap top-3/4 transform translate-y-[45px] bg-green-500 w-4 h-1 rounded-full flex items-center justify-center">
						<span className="-translate-x-1/2 px-4">
							Jan 2023 - Dec 2024
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start flex-1 max-w-1/2">
					<div className="h-96 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1.5 }}
							className="h-96 w-full rounded-3xl bg-slate-900 mb-10"
						></motion.div>
					</AnimatePresence>
					<div className="h-96 w-full bg-transparent mb-10"></div>
					<AnimatePresence>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							className="h-96 w-full rounded-3xl bg-slate-900"
						></motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
