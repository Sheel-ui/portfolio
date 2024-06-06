"use client";
import { useState } from "react";
import Title from "./Title";
import Socials from "./Socials";

export default function Contact() {
	const [result, setResult] = useState("");
	const [textColor, setTextColor] = useState("");
	const onSubmit = async (event: any) => {
		event.preventDefault();
		setResult("Sending....");
		setTextColor("text-yellow-300");

		const formData = new FormData(event.target);
		formData.append("access_key", "e81f0069-b955-4918-9e81-2dcac1a4174a");
		console.log(formData);
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			console.log(data);
			setResult("Message sent successfully 🍀");
			setTextColor("text-green-100");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<div id="contact" className="pt-20">
			<Title
				text="Contact Me 📬"
				className="flex flex-col items-center justify-center text-center -rotate-6"
			/>
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
					<form className="flex flex-col" onSubmit={onSubmit}>
						<label htmlFor="name" className="my-1 text-lg">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="custom-input"
							required
						/>
						<label htmlFor="email" className="my-1 text-lg">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="custom-input"
							required
						/>
						<label htmlFor="subject" className="my-1 text-lg">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							className="custom-input"
							required
						/>
						<label htmlFor="message" className="my-1 text-lg">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="custom-input h-32"
							required
						/>
						<button className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-700 transition duration-300 mt-4">
							Send Message
						</button>
					</form>
					<span className={`mt-4 block ${textColor}`}>{result}</span>
				</div>
			</div>
		</div>
	);
}
