"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

import Image from "next/image";

const ACCENT = "#447f80";
const STAR_GOLD = "#f5b544";

const container: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
			staggerChildren: 0.08,
			delayChildren: 0.12,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut" as const,
		},
	},
};

const slideVariants: Variants = {
	enter: { opacity: 0, y: 18, scale: 0.98 },
	center: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.45,
			ease: "easeOut" as const,
		},
	},
	exit: {
		opacity: 0,
		y: -18,
		scale: 0.98,
		transition: {
			duration: 0.35,
			ease: "easeIn" as const,
		},
	},
};

const REVIEWS = [
	{
		name: "Rohit & Sneha",
		role: "3BHK Apartment · Gachibowli",
		quote:
			"Kasa Interiors translated our ideas into a home that feels elegant yet easy to live in. Every detail, from lighting to storage, has been thoughtfully planned.",
		avatar: "",
	},
	{
		name: "Anita Sharma",
		role: "Villa Interiors · Kompally",
		quote:
			"The team handled design, execution and coordination end-to-end. Timelines were clear, finishes were premium and the final result matched the 3D visuals.",
		avatar: "",
	},
	{
		name: "Harish & Co.",
		role: "Office & Studio · Banjara Hills",
		quote:
			"They created a workspace that reflects our brand and works for day-to-day operations. The balance of aesthetics and practicality really stands out.",
		avatar: "",
	},
];

export default function Reviews() {
	const [activeIndex, setActiveIndex] = useState(0);

	// auto-rotate
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
		}, 7000);
		return () => clearInterval(timer);
	}, []);

	const activeReview = REVIEWS[activeIndex];

	const goPrev = () => {
		setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
	};

	const goNext = () => {
		setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
	};

	return (
		<section className="w-full bg-white py-16 sm:py-20 lg:py-24">
			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* background pattern + glow */}
				<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
					<div
						className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
						style={{ backgroundColor: `${ACCENT}22` }}
					/>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top\, rgba(148,163,184,0.14) 0\, transparent 55%)]" />
					<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size[70px_70px]" />
				</div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					className="flex flex-col items-center text-center">
					{/* heading */}
					<motion.p
						variants={item}
						className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm">
						<span className="h-1.5 w-1.5 rounded-full bg-[#447f80]" />
						What our clients say
					</motion.p>

					<motion.h2
						variants={item}
						className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
						Real homes,{" "}
						<span className="italic" style={{ color: ACCENT }}>
							real stories
						</span>
						.
					</motion.h2>

					<motion.div
						variants={item}
						className="mt-3 flex items-center justify-center gap-2 text-[0.85rem] text-slate-700">
						<div className="flex items-center gap-1 text-[0.9rem]">
							{Array.from({ length: 5 }).map((_, i) => (
								<FiStar
									key={i}
									className="h-4 w-4"
									style={{ color: STAR_GOLD }}
								/>
							))}
						</div>
						<span className="text-slate-500">5.0★ average project rating</span>
					</motion.div>

					{/* main card */}
					<motion.div
						variants={item}
						whileHover={{
							y: -6,
							rotateX: 2,
							rotateY: -2,
						}}
						transition={{ type: "spring", stiffness: 170, damping: 18 }}
						style={{ transformPerspective: 1200 }}
						className="mt-10 w-full">
						<div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.14)] backdrop-blur-md sm:p-8">
							{/* glow on hover */}
							<div
								className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100"
								style={{
									boxShadow: `0 0 0 1px ${ACCENT}26, 0 22px 60px ${ACCENT}24`,
								}}
							/>

							{/* content with AnimatePresence */}
							<AnimatePresence mode="wait">
								<motion.div
									key={activeReview.name}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									className="relative z-10 flex flex-col items-center text-center">
									{/* avatar */}
									<div className="relative mb-4 h-16 w-16 sm:h-20 sm:w-20">
										<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg_at_50%_0%,#f5b544,#447f80,#f5b544)] opacity-70 blur-[10px]" />
										<div className="relative h-full w-full overflow-hidden rounded-full border border-white bg-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.25)]">
											{/* <Image
												src={activeReview.avatar}
												alt={activeReview.name}
												fill
												className="object-cover"
											/> */}
											<IoPerson className="h-full w-full rounded-full" />
										</div>
									</div>

									{/* stars small under avatar (mobile highlight) */}
									<div className="mb-2 flex items-center justify-center gap-0.5 sm:hidden">
										{Array.from({ length: 5 }).map((_, i) => (
											<FiStar
												key={i}
												className="h-3.5 w-3.5"
												style={{ color: STAR_GOLD }}
											/>
										))}
									</div>

									<p className="mt-2 text-[0.95rem] leading-relaxed text-slate-700 sm:text-base">
										“{activeReview.quote}”
									</p>

									<div className="mt-6 border-t border-slate-200 pt-4">
										<p className="text-[0.95rem] font-semibold text-slate-900">
											{activeReview.name}
										</p>
										<p className="mt-0.5 text-[0.78rem] uppercase tracking-[0.18em] text-slate-500">
											{activeReview.role}
										</p>
									</div>
								</motion.div>
							</AnimatePresence>

							{/* controls & dots */}
							<div className="mt-6 flex items-center justify-between gap-4">
								<div className="flex items-center gap-2">
									<button
										type="button"
										onClick={goPrev}
										className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.8rem] text-slate-600 transition hover:border-[#447f80] hover:text-[#447f80]">
										<FiChevronLeft className="h-4 w-4" />
									</button>
									<button
										type="button"
										onClick={goNext}
										className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.8rem] text-slate-600 transition hover:border-[#447f80] hover:text-[#447f80]">
										<FiChevronRight className="h-4 w-4" />
									</button>
								</div>

								<div className="flex items-center gap-2">
									{REVIEWS.map((review, i) => (
										<button
											key={review.name}
											type="button"
											onClick={() => setActiveIndex(i)}
											className="relative flex items-center justify-center">
											<div
												className={`h-2.5 rounded-full bg-slate-300/80 transition-all duration-300 ${
													i === activeIndex ? "w-6 bg-[#447f80]" : "w-2.5"
												}`}
											/>
										</button>
									))}
									<span className="ml-2 text-[0.75rem] text-slate-500">
										{activeIndex + 1} / {REVIEWS.length}
									</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* bottom note */}
					<motion.p
						variants={item}
						className="mt-6 max-w-2xl text-[0.85rem] text-slate-600">
						Most of our projects come through referrals and repeat
						collaborations — a quiet but strong endorsement from the families
						and teams we work with.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
