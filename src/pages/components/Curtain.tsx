import React from "react";
import { easeInOut, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Clap from "./Clap";
export default function Curtain({ className }: { className: string }) {
	const curtainVariants = {
		start: {
			y: "0%",
		},
		end: {
			y: "-100%",
		},
	};

	const bannerVariants: Variants = {
		hide: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};
	return (
		<motion.div
			className={cn(
				"min-h-screen h-screen w-full !bg-cream absolute top-0 left-0 overflow-hidden",
				className
			)}
			variants={curtainVariants}
			initial='start'
			animate='end'
			transition={{ duration: 2, delay: 5, ease: easeInOut }}>
			<motion.div
				variants={bannerVariants}
				initial='hide'
				animate='show'
				transition={{ staggerChildren: 1, duration: 2 }}
				className='flex items-center flex-col  justify-center h-full gap-4'>
				<motion.div
					className='text- md:text-4xl'
					variants={bannerVariants}>
					Lights!
				</motion.div>
				<motion.div
					className='text-2xl md:text-5xl'
					variants={bannerVariants}>
					Camera!
				</motion.div>
				<motion.div
					className='text-3xl md:text-6xl'
					variants={bannerVariants}>
					Action!
				</motion.div>
				<motion.div variants={bannerVariants}>
					<Clap />
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
