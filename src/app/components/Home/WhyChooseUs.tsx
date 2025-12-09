"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#447f80";

const HERO_URL =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";

const USP_ITEMS = [
	{
		key: "end-to-end",
		title: "End-to-end execution",
		desc: "Single studio managing design, production and site work from first sketch to final styling.",
	},
	{
		key: "3d-designs",
		title: "In-house 3D visuals",
		desc: "Photo-realistic walkthroughs so you can see, refine and approve your space before execution.",
	},
	{
		key: "materials",
		title: "Curated materials",
		desc: "Branded hardware, engineered boards and finishes selected for longevity and daily use.",
	},
	{
		key: "supervision",
		title: "Dedicated site supervision",
		desc: "Regular site checks and progress updates to keep detailing aligned with the design intent.",
	},
	{
		key: "pricing",
		title: "Transparent costing",
		desc: "Itemised BOQs, clear inclusions and documented variations. No hidden scope or surprise bills.",
	},
	{
		key: "timelines",
		title: "Realistic timelines",
		desc: "Workflows planned like a project schedule, with internal checkpoints—not guesswork.",
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

const cardVariants: any = {
	hidden: { opacity: 0, y: 18 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.45,
			ease: "easeOut",
			delay: 0.06 * i,
		},
	}),
};

export default function WhyChooseKasa() {
	return (
		<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
			{/* Soft background only with accent color */}
			<div className="pointer-events-none absolute inset-0">
				<div
					className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
					style={{ backgroundColor: `${ACCENT}14` }}
				/>
				<div
					className="absolute -bottom-20 right-10 h-56 w-56 rounded-full blur-3xl"
					style={{ backgroundColor: `${ACCENT}12` }}
				/>
			</div>

			<motion.div
				variants={sectionVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading block */}
				<div className="max-w-3xl">
					<p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ backgroundColor: ACCENT }}
						/>
						<span>Why clients choose us</span>
					</p>

					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.15rem]">
						Interiors run like a{" "}
						<span className="italic" style={{ color: ACCENT }}>
							well-planned project
						</span>
						, not an experiment.
					</h2>

					<p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.96rem]">
						From first consultation to handover, we combine design sensitivity
						with structured processes—so your home, apartment or workspace feels
						beautiful, practical and calmly executed.
					</p>
				</div>

				{/* Main layout */}
				<div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] lg:items-start">
					{/* LEFT: Single hero image panel */}
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="relative">
						<motion.div
							whileHover={{ y: -6, rotateX: 3, rotateY: -2 }}
							transition={{ type: "spring", stiffness: 160, damping: 18 }}
							style={{ transformPerspective: 1400 }}
							className="relative overflow-hidden rounded-3xl bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 backdrop-blur-md">
							{/* Top meta row */}
							<div className="mb-4 flex items-center justify-between gap-3">
								<div className="flex items-center gap-2">
									<div
										className="h-[3px] w-10 rounded-full"
										style={{
											background: `linear-gradient(to right, ${ACCENT}, ${ACCENT}aa)`,
										}}
									/>
									<p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
										Homes · Apartments · Workspaces
									</p>
								</div>
								<p className="text-[0.72rem] uppercase tracking-[0.16em] text-slate-400">
									Design · Detailing · Delivery
								</p>
							</div>

							{/* Large image only */}
							<div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-[1.6rem]">
								<Image
									src={HERO_URL}
									alt="Kasa Interiors – homes, villas and facades"
									fill
									className="object-cover transition-transform duration-800 hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-slate-900/10 to-transparent" />

								{/* Chips over image */}
								<div className="absolute top-4 left-4 right-4 flex flex-wrap items-center gap-2 text-[0.7rem]">
									<span className="rounded-full bg-black/55 px-3 py-1 font-medium text-slate-50 backdrop-blur">
										Homes & Villas
									</span>
									<span className="rounded-full bg-black/40 px-3 py-1 text-slate-100/90 backdrop-blur">
										Apartments
									</span>
									<span className="rounded-full bg-black/30 px-3 py-1 text-slate-100/80 backdrop-blur">
										Offices & Studios
									</span>
								</div>

								<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[0.7rem] text-slate-50">
									<div className="flex flex-col gap-0.5">
										<span className="font-semibold">
											Hyderabad · Telangana · Andhra Pradesh
										</span>
										<span className="text-slate-200">
											Practical planning, warm lighting and calm, refined
											finishes.
										</span>
									</div>
									<span className="rounded-full bg-black/55 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em]">
										Kasa Interiors
									</span>
								</div>
							</div>

							{/* Bottom chips below image */}
							<div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-slate-600">
								<span className="rounded-full bg-slate-100 px-3 py-1">
									End-to-end interior projects
								</span>
								<span
									className="rounded-full px-3 py-1"
									style={{
										backgroundColor: `${ACCENT}0f`,
										color: ACCENT,
										border: `1px solid ${ACCENT}33`,
									}}>
									Design · Execution · Support
								</span>
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT: USP grid */}
					<div className="grid gap-5 md:grid-cols-2">
						{USP_ITEMS.map((item, index) => (
							<motion.article
								key={item.key}
								custom={index}
								variants={cardVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.25 }}
								whileHover={{
									y: -4,
									boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
								}}
								transition={{
									type: "spring",
									stiffness: 220,
									damping: 20,
								}}
								className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 sm:p-5 backdrop-blur-sm">
								{/* hover glow outline */}
								<div
									className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									style={{
										boxShadow: `0 0 0 1px ${ACCENT}26, 0 16px 38px ${ACCENT}1a`,
									}}
								/>

								<div className="relative z-10 flex h-full flex-col">
									<div className="mb-3 flex items-center justify-between gap-2">
										<span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
											Advantage
										</span>
										<div className="flex items-center gap-1">
											<span
												className="h-1 w-6 rounded-full"
												style={{ backgroundColor: `${ACCENT}cc` }}
											/>
											<span
												className="h-1 w-3 rounded-full"
												style={{ backgroundColor: `${ACCENT}66` }}
											/>
										</div>
									</div>

									<h3 className="text-sm font-semibold text-slate-900 sm:text-[0.95rem]">
										{item.title}
									</h3>

									<p className="mt-2 text-[0.85rem] leading-relaxed text-slate-600">
										{item.desc}
									</p>

									<div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-slate-100">
										<div className="h-full w-0 rounded-full bg-linear-to-r from-[rgba(68,127,128,0.95)] via-[rgba(68,127,128,0.5)] to-[rgba(68,127,128,0.95)] transition-all duration-300 group-hover:w-full" />
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
