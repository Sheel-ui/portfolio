"use client";
import { useState } from "react";
import Title from "./Title";
import Socials from "./Socials";

export default function Contact() {
	const [result, setResult] = useState("");
	const [textColor, setTextColor] = useState("");

	const onSubmit = async (event: any) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const name = formData.get("name") as string;
		const email = formData.get("userId") as string;
		const subject = formData.get("subject") as string;

		if (!name || name.length <= 3) {
			setResult("Name must be more than 3 characters.");
			setTextColor("text-red-300");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email)) {
			setResult("Enter a valid email address.");
			setTextColor("text-red-300");
			return;
		}

		if (!subject || subject.length <= 3) {
			setResult("Subject must be more than 3 characters.");
			setTextColor("text-red-300");
			return;
		}

		formData.append("email", "sheeltaskar64@gmail.com");
		formData.append("access_key", "e81f0069-b955-4918-9e81-2dcac1a4174a");
		const currentSubject = formData.get("message");
		formData.set(
			"message",
			`${currentSubject}\nFrom: ${formData.get("userId")}`
		);
		formData.delete("userId");

		setResult("Sending....");
		setTextColor("text-yellow-300");
		console.log(formData);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			console.log(data);
			setResult(
				"Message sent successfully. I will try to get back to you as soon as possible."
			);
			setTextColor("text-green-300");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(
				"Sorry, something went wrong. I have been notifed the issue. In the mean time, you can try reaching me out on Linkedin."
			);
			setTextColor("text-red-300");
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
							Name *
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="custom-input"
							required
						/>
						<label htmlFor="userId" className="my-1 text-lg">
							Your Email *
						</label>
						<input
							type="text"
							id="userId"
							name="userId"
							className="custom-input"
							required
						/>
						<label htmlFor="subject" className="my-1 text-lg">
							Subject *
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
						/>
						<button
							type="submit"
							className="bg-indigo-500 rounded-lg p-2 hover:bg-indigo-700 transition duration-300 mt-4"
						>
							Send Message
						</button>
					</form>
					<span className={`mt-4 block ${textColor}`}>{result}</span>
				</div>
			</div>
		</div>
	);
}
