"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT = "#447f80";

const SERVICES_BG =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151915/pexels-dayvison-de-oliveira-silva-5733617-1920x1280_ckthe0.jpg";

export default function ServicesHero() {
	return (
		<section className="relative flex items-center justify-center w-full min-h-[55vh] md:min-h-[65vh] overflow-hidden">
			{/* Background Image */}
			<Image
				src={SERVICES_BG}
				alt="Kasa Interiors Services Banner"
				fill
				priority
				className="object-cover"
			/>

			{/* Soft Dark Overlay */}
			<div className="absolute inset-0 bg-black/45" />

			{/* Very Light Dot Grid */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.18]">
				<div className="h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size[22px_22px]" />
			</div>

			{/* Text Content */}
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.85, ease: "easeOut" }}
				className="relative z-10 text-center px-6">
				{/* Small Label */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-[0.75rem] uppercase tracking-[0.28em] text-white/80">
					Our Services
				</motion.p>

				{/* Main Title */}
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.8 }}
					className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
					<span style={{ color: ACCENT }}>Know More</span> About Our Services
				</motion.h1>
			</motion.div>
		</section>
	);
}
