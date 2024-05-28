import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Hero() {
	return (
        <div className="min-h-[60vh] flex gap-14 flex-col-reverse lg: gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you! 👋 <br /> <span className="underline underline-offset-8 decoration-green-500">I&apos;m Sheel.</span>
                </h1>
                <p className="md:w-96 text-lg text-grey-300">
                    Based in Florida, I&apos;m Fulltack developer passionate about building a modern web applications that users love.
                </p>
                <Link href={"mailto:sheeltaskar64@gmail.com"} className="inline-block">
                    <div className="hover:text-green-400 teansition-all">
                        <h1 className="text-3xl font-bold ">
                            Contact Me 📬
                        </h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 -rotate-1"></div>
                    </div>
                </Link>
            </div>
            <div className="relative">
                <div className="size-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="size-32 rounded-2xl bg-green-500"></div>
                        <div className="size-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="size-32 rounded-2xl bg-indigo-500"></div>
                        <div className="size-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                    <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                        <p>🚀 Available for Work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
	);
}
