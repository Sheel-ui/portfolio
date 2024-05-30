"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
	const [isClick, setisClick] = useState(false);

	const toggleNav = () => {
		setisClick(!isClick);
	};

	return (
		<div className="py-10 relative">
			<nav className="flex justify-between items-center animate-move-down">
				<h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
					Sheel Taskar 👨🏻‍💻
				</h1>
				<div className="hidden md:block space-x-8">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#education">Experience</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
				
				<div className="md:hidden  flex justify-between items-center md:animate-move-down ">
					<button onClick={toggleNav} className="hover:scale-125 transition-all">
						{!isClick ? <GiHamburgerMenu /> : <GrClose />}
					</button>
				</div>
			</nav>
			{
				isClick && (
					<div className="pt-2 md:hidden flex flex-col items-end w-full space-y-2 animate-slideInDown overflow-hidden absolute z-10">
						<a href="#about">About</a>
						<a href="#skills">Skills</a>
						<a href="#education">Experience</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
					</div>
				)
			}
		</div>
	);
}
