"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_BG =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg"; // replace with your gallery banner image

const ACCENT = "#447f80";

export default function GalleryBanner() {
	return (
		<section className="relative flex min-h-[55vh] md:min-h-[70vh] w-full items-center justify-center overflow-hidden">
			{/* Background Image */}
			<Image
				src={GALLERY_BG}
				alt="Kasa Interiors Gallery"
				fill
				priority
				className="object-cover"
			/>

			{/* Soft dark overlay */}
			<div className="absolute inset-0 bg-black/45" />

			{/* Architectural grid */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.18]">
				<div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size[70px_70px]" />
			</div>

			{/* Accent glow */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.55, scale: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				className="pointer-events-none absolute -top-24 right-[-60px] h-72 w-72 rounded-full blur-[130px]"
				style={{ background: ACCENT }}
			/>

			{/* Center text */}
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.9, ease: "easeOut" }}
				className="relative z-10 px-6 text-center">
				{/* Label */}
				<motion.p
					initial={{ opacity: 0, y: 6 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					className="text-[0.75rem] uppercase tracking-[0.28em] text-white/80">
					Gallery
				</motion.p>

				{/* Main Title */}
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.75 }}
					className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
					Our Project{" "}
					<span className="font-extrabold" style={{ color: ACCENT }}>
						Gallery
					</span>
				</motion.h1>

				{/* Subheading */}
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35, duration: 0.8 }}
					className="mt-4 mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-white/90 tracking-wide">
					A curated showcase of our finest residential and commercial interior
					projects — crafted with intention, detail and timeless elegance.
				</motion.p>
			</motion.div>
		</section>
	);
}
