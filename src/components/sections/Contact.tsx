import Title from "./Title";
import Socials from "./Socials";

export default function Contact() {
	return (
		<div id="contact" className="pt-20">
			<Title
				text="Contact Me 📬"
				className="flex flex-col items-center justify-center text-center -rotate-6"
			></Title>
			<div className="flex flex-col lg:flex-row items-center lg:items-start mt-20">
				<div className="w-2/3 lg:w-1/2 space-y-5">
					<p className="hidden sm:block text-lg text-gray-300 text-center pb-10 lg:pb-0 lg:w-96 lg:text-left">
						I&apos;m currently looking for new opportunities, my
						inbox is always open. Whether you have a question or
						just want to say hi, Please feel free to reach out to
						me!
					</p>
					<div className="hidden lg:block">
						<Socials />
					</div>
				</div>
				<div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
					<form className="flex flex-col">
						<label htmlFor="name" className="my-1 text-lg">
							Name
						</label>
						<input type="text" className="custom-input" />
						<label htmlFor="email" className="my-1 text-lg">
							Email
						</label>
						<input type="text" className="custom-input" />
						<label htmlFor="Subject" className="my-1 text-lg">
							Subject
						</label>
						<input type="text" className="custom-input" />
						<label htmlFor="Body" className="my-1 text-lg">
							Message
						</label>
						<textarea className="custom-input h-32" />
						<button className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-700 transition duration-300 ">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
