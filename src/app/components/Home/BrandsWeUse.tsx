"use client";

import { motion, type Variants } from "framer-motion";
import {
	LuUtensilsCrossed,
	LuSettings2,
	LuRuler,
	LuLayers,
	LuBoxes,
	LuPanelLeftOpen,
	LuPaintRoller,
	LuLampCeiling,
} from "react-icons/lu";

const ACCENT = "#447f80";

const BRANDS = [
	{
		name: "Hettich",
		category: "Kitchens & Wardrobes",
		tagline: "Soft-close channels, hinges & fittings",
		icon: LuUtensilsCrossed,
	},
	{
		name: "Häfele",
		category: "Modular Hardware",
		tagline: "Premium systems for kitchens & storage",
		icon: LuSettings2,
	},
	{
		name: "Ebco",
		category: "Everyday Hardware",
		tagline: "Reliable fittings for drawers & shutters",
		icon: LuRuler,
	},
	{
		name: "Greenply",
		category: "Core Boards",
		tagline: "IS-grade ply for long-term stability",
		icon: LuPanelLeftOpen,
	},
	{
		name: "Century",
		category: "Ply & Blockboard",
		tagline: "Structural base for wardrobes & units",
		icon: LuBoxes,
	},
	{
		name: "Merino",
		category: "Laminates & Finishes",
		tagline: "Textures for wardrobes, kitchens & TV units",
		icon: LuLayers,
	},
	{
		name: "Asian Paints",
		category: "Wall Finishes",
		tagline: "Smooth interior paints & feature walls",
		icon: LuPaintRoller,
	},
	{
		name: "Philips",
		category: "Lighting",
		tagline: "Ambient, task & accent lighting solutions",
		icon: LuLampCeiling,
	},
];

const container: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
			staggerChildren: 0.06,
			delayChildren: 0.1,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 16, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.45,
			ease: "easeOut" as const,
		},
	},
};

export default function BrandsWeUse() {
	return (
		<section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
			{/* soft background with interior-like calm vibe */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div
					className="absolute -top-24 left-10 h-56 w-56 rounded-full blur-3xl"
					style={{ backgroundColor: `${ACCENT}18` }}
				/>
				<div
					className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full blur-[130px]"
					style={{ backgroundColor: `${ACCENT}12` }}
				/>
				<div className="absolute inset-0 opacity-55">
					<div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16)_0,transparent_55%)]" />
				</div>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* heading block */}
				<div className="text-center">
					<motion.p
						variants={item}
						className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ backgroundColor: ACCENT }}
						/>
						<span>Brands we use for your interiors</span>
					</motion.p>

					<motion.h2
						variants={item}
						className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
						Interior-grade{" "}
						<span className="italic" style={{ color: ACCENT }}>
							materials & finishes
						</span>{" "}
						for everyday living.
					</motion.h2>

					<motion.p
						variants={item}
						className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.96rem]">
						From modular kitchens and wardrobes to paints and lighting, we work
						with trusted brands so your interiors perform beautifully over time.
					</motion.p>
				</div>

				{/* brand cards grid */}
				<motion.div variants={item} className="mt-10">
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{BRANDS.map((brand, idx) => {
							const Icon = brand.icon;
							return (
								<motion.div
									key={brand.name}
									variants={item}
									whileHover={{
										y: -4,
										scale: 1.02,
										boxShadow: "0 20px 50px rgba(15,23,42,0.16)",
									}}
									transition={{
										type: "spring",
										stiffness: 210,
										damping: 18,
										delay: idx * 0.02,
									}}
									className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 backdrop-blur-sm">
									{/* glow outline on hover */}
									<div
										className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
										style={{
											boxShadow: `0 0 0 1px ${ACCENT}33, 0 16px 42px ${ACCENT}24`,
										}}
									/>

									<div className="relative z-10 flex items-start gap-3">
										{/* ICON BUBBLE */}
										<div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-300 group-hover:border-[rgba(68,127,128,0.55)] group-hover:bg-[rgba(68,127,128,0.07)]">
											<div className="relative flex h-7 w-7 items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(148,163,184,0.35)] group-hover:shadow-[0_0_0_1px_rgba(68,127,128,0.55),0_8px_18px_rgba(68,127,128,0.35)] transition-all duration-300">
												<Icon className="h-4 w-4" style={{ color: ACCENT }} />
											</div>
										</div>

										{/* TEXT BLOCK */}
										<div className="flex flex-1 flex-col gap-1">
											<div className="flex items-center justify-between gap-2">
												<p className="text-sm font-semibold tracking-tight text-slate-900">
													{brand.name}
												</p>
												<span className="rounded-full bg-slate-50 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-500 group-hover:bg-[rgba(68,127,128,0.07)] group-hover:text-[rgba(68,127,128,1)]">
													Interiors
												</span>
											</div>

											<p className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-slate-400">
												{brand.category}
											</p>

											<p className="text-[0.8rem] leading-relaxed text-slate-600">
												{brand.tagline}
											</p>

											{/* accent bar aligned with brand color */}
											<div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
												<div className="h-full w-0 rounded-full bg-linear-to-r from-[rgba(68,127,128,0.95)] via-[rgba(68,127,128,0.55)] to-[rgba(68,127,128,0.95)] transition-all duration-300 group-hover:w-full" />
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				{/* small note */}
				<motion.p
					variants={item}
					className="mt-8 text-center text-[0.8rem] text-slate-500">
					We recommend brand combinations based on your project scope, but we
					never compromise on core quality and after-sales support.
				</motion.p>
			</motion.div>
		</section>
	);
}
