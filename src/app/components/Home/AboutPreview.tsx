"use client";

import { motion } from "framer-motion";
import { FiHome, FiGrid, FiLayers, FiMapPin } from "react-icons/fi";

const ACCENT = "#447f80";

const ICONS = [
	{ icon: FiHome, label: "Homes & Villas" },
	{ icon: FiGrid, label: "Modular Kitchens" },
	{ icon: FiLayers, label: "Wardrobes & Storage" },
	{ icon: FiMapPin, label: "Offices & Retail" },
];

export default function AboutPreview() {
	return (
		<section className="relative w-full py-16 sm:py-20 lg:py-24">
			{/* BACKGROUND GRADIENT (Highlighting Color) */}
			<div
				className="absolute inset-0 -z-10 bg-linear-to-br from-[#e8f4f3] via-[#cde5e3] to-[#a3c4c2]"
				aria-hidden="true"
			/>

			{/* Soft glow blobs */}
			<div
				className="pointer-events-none absolute -top-20 left-10 h-56 w-56 rounded-full blur-[90px]"
				style={{ backgroundColor: `${ACCENT}55` }}
			/>
			<div
				className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full blur-[100px]"
				style={{ backgroundColor: `${ACCENT}33` }}
			/>

			<div className="mx-auto max-w-5xl px-6 text-center">
				{/* GLASS CARD */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="
            relative mx-auto rounded-4xl
            bg-white/70 backdrop-blur-xl
            border border-white/60 shadow-[0_12px_50px_rgba(0,0,0,0.1)]
            px-6 py-10 sm:px-10 sm:py-12
          ">
					{/* Title */}
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-600 border border-slate-200">
						<span
							className="h-1.5 w-1.5 rounded-full"
							style={{ backgroundColor: ACCENT }}
						/>
						Interior Design Studio · Hyderabad
					</motion.p>

					{/* Main Heading */}
					<h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-slate-900">
						Spaces designed with{" "}
						<span style={{ color: ACCENT }} className="italic font-bold">
							purpose
						</span>{" "}
						and built for how you live.
					</h2>

					{/* Supporting text */}
					<p className="mx-auto mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-slate-700">
						We craft refined, functional and timeless interiors across Telangana
						& Andhra Pradesh — blending comfort, detail and architecture into
						spaces that feel effortless and beautiful.
					</p>

					{/* ICON ROW - Interior categories */}
					<div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
						{ICONS.map(({ icon: Icon, label }) => (
							<div
								key={label}
								className="
                  flex items-center gap-3
                  rounded-2xl bg-white/80 backdrop-blur
                  px-4 py-2 shadow-sm border border-slate-200
                  hover:shadow-md transition
                ">
								<div
									className="flex h-9 w-9 items-center justify-center rounded-xl"
									style={{
										backgroundColor: `${ACCENT}15`,
										border: `1px solid ${ACCENT}33`,
									}}>
									<Icon className="h-5 w-5" style={{ color: ACCENT }} />
								</div>
								<p className="text-sm font-medium text-slate-800">{label}</p>
							</div>
						))}
					</div>

					{/* Bottom chips */}
					<div className="mt-8 flex flex-wrap justify-center gap-2 text-[0.75rem] text-slate-600">
						<span className="rounded-full bg-white/70 px-3 py-1 border border-slate-200">
							Turnkey Interiors
						</span>
						<span className="rounded-full bg-white/70 px-3 py-1 border border-slate-200">
							Material Selection
						</span>
						<span
							className="rounded-full px-3 py-1"
							style={{
								backgroundColor: `${ACCENT}20`,
								color: ACCENT,
								border: `1px solid ${ACCENT}50`,
							}}>
							Detail-Driven Execution
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
