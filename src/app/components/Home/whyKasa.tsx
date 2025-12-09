"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const ACCENT = "#447f80";

const HERO_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";

const STATS = [
	{ label: "Idea & Concept", value: 95 },
	{ label: "Accuracy", value: 88 },
	{ label: "Communication", value: 90 },
	{ label: "Execution", value: 92 },
];

const BULLETS = [
	"Professional, detail-focused team",
	"Reasonable and transparent pricing",
	"Priority for design quality & function",
	"Ensured quality with structured checks",
];

/* Section animation */
const sectionVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: "easeOut" as const },
	},
};

/* Card animation */
const item: Variants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: "easeOut" as const },
	},
};

export default function WhyKasa() {
	return (
		<section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
			{/* BG blur accents (now safely clipped by overflow-hidden) */}
			<div
				className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full blur-3xl"
				style={{ backgroundColor: `${ACCENT}15` }}
			/>
			<div
				className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full blur-3xl"
				style={{ backgroundColor: `${ACCENT}12` }}
			/>

			<motion.div
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{
					once: true, // animate only first time
					amount: 0.45,
				}}
				className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-12 lg:px-8">
				{/* LEFT IMAGE PANEL */}
				<motion.div
					variants={item}
					className="relative w-full overflow-hidden rounded-3xl bg-slate-900/90 shadow-[0_24px_70px_rgba(15,23,42,0.28)] lg:w-[52%]">
					<div className="relative h-80 sm:h-[360px] md:h-[400px] lg:h-full">
						<Image
							src={HERO_URL}
							alt="Kasa Interiors project"
							fill
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/35" />
					</div>

					{/* STATS */}
					<div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-10">
						<div className="mb-6 sm:mb-8">
							<p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-200">
								Our Approach
							</p>
							<h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
								Balancing concept, precision and delivery.
							</h3>
						</div>

						<div className="space-y-4 sm:space-y-5">
							{STATS.map((stat, idx) => (
								<div key={stat.label} className="space-y-1">
									<div className="flex items-center justify-between text-[0.85rem] font-medium text-slate-100">
										<span>{stat.label}</span>
										<span>{stat.value}%</span>
									</div>

									<div className="h-[3px] w-full rounded-full bg-white/25">
										<motion.div
											initial={{ width: 0 }}
											whileInView={{ width: `${stat.value}%` }}
											viewport={{
												once: true,
												amount: 0.6,
											}}
											transition={{
												duration: 0.9,
												ease: "easeOut" as const,
												delay: idx * 0.12,
											}}
											className="h-full rounded-full"
											style={{
												background: `linear-gradient(to right, ${ACCENT}, ${ACCENT}dd)`,
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* RIGHT CONTENT */}
				<motion.div
					variants={item}
					className="relative w-full self-center rounded-3xl bg-white/95 px-5 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 backdrop-blur-sm lg:w-[48%] lg:px-7 lg:py-8">
					<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ backgroundColor: ACCENT }}
						/>
						<span>Why choose us</span>
					</div>

					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
						Thoughtful interiors,{" "}
						<span style={{ color: ACCENT }}>executed with discipline</span>.
					</h2>

					<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.96rem]">
						As a Hyderabad-based studio, we bring design sensitivity and
						structured execution to every home and workspace—ensuring spaces
						that feel refined, practical and long-lasting.
					</p>

					<div className="mt-6 space-y-3">
						{BULLETS.map((point) => (
							<motion.div
								key={point}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{
									once: true,
									amount: 0.6,
								}}
								transition={{ duration: 0.4, ease: "easeOut" as const }}
								className="flex items-start gap-3 text-sm text-slate-700">
								<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
									<FiCheckCircle
										className="h-4 w-4"
										style={{ color: ACCENT }}
									/>
								</div>
								<p>{point}</p>
							</motion.div>
						))}
					</div>

					<div className="mt-6 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
						<span className="rounded-full bg-slate-100 px-3 py-1">
							Luxury interiors, practical planning
						</span>
						<span
							className="rounded-full px-3 py-1"
							style={{
								backgroundColor: `${ACCENT}0f`,
								color: ACCENT,
								border: `1px solid ${ACCENT}33`,
							}}>
							Design · Execution · Quality Check
						</span>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
