import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import About from "@/components/sections/About";

export default function Home() {
	return (
		<div className="bg-black overflow-hidden">
			<div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
				<div className="sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto p-5">
					<Navbar />
					<Hero />
				</div>
				<div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full "></div>
			</div>
			<div className="sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] mx-auto p-5 mt-20">
				<About />
				<Skills />
				<Projects />
				<Education />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
