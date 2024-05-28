import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div className="min-h-screen bg-black">
			<div className="max-w-7xl mx-auto p-5 overflow-hidden">
				<Navbar></Navbar>
        <Hero></Hero>
			</div>
		</div>
	);
}
