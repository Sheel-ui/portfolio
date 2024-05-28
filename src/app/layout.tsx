import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://github.com/Sheel-ui/portfolio.git"),

	title: {
		template: "Sheel Taskar",
		default: "Sheel Taskar",
	},
	authors: {
		name: "Sheel Taskar",
	},

	description:
		"Based in Florida, I'm Fulltack developer passionate about building a modern web applications that users love.",
	openGraph: {
		title: "Sheel Taskar",
		description:
			"Based in Florida, I'm Fulltack developer passionate about building a modern web applications that users love.",
		url: "https://github.com/Sheel-ui/portfolio.git",
		siteName: "Sheel Taskar",
		images: "/a.png",
		type: "website",
	},
	keywords: ["Sheel", "Sheel Taskar", "sheel-ui", "sheeltaskar"],
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={spaceGrotesk.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
