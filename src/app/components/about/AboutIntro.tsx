"use client";

import { motion } from "framer-motion";
import { FiHome, FiLayout, FiMapPin } from "react-icons/fi";

const ACCENT = "#447f80";
const BG_IMG =
	"https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg";

const FEATURES = [
	{
		title: "Residential & Commercial",
		subtitle: "Homes · Villas · Offices · Retail",
		icon: FiHome,
	},
	{
		title: "Design + Execution",
		subtitle: "Turnkey Interior Projects",
		icon: FiLayout,
	},
	{
		title: "Hyderabad-Based Studio",
		subtitle: "Serving Telangana & AP",
		icon: FiMapPin,
	},
];

export default function AboutIntro() {
	return (
		<section
			className="
				relative w-full py-16 lg:py-20
				bg-fixed bg-cover bg-center
			"
			style={{ backgroundImage: `url(${BG_IMG})` }}>
			{/* Content wrapper */}
			<div className="relative z-10 mx-auto max-w-6xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="
						rounded-3xl bg-white/85 backdrop-blur-xl border border-white/60
						shadow-[0_16px_50px_rgba(0,0,0,0.10)]
						p-6 sm:p-7 md:p-8 lg:p-9
					">
					{/* Top row: label + small tagline */}
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-200">
							<span
								className="h-2 w-2 rounded-full"
								style={{ backgroundColor: ACCENT }}
							/>
							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-600">
								About Kasa Interiors
							</p>
						</div>

						<p className="text-[0.75rem] text-slate-500">
							Hyderabad • Telangana • Andhra Pradesh
						</p>
					</div>

					{/* Heading */}
					<h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">
						Spaces designed with{" "}
						<span className="italic font-bold" style={{ color: ACCENT }}>
							intention
						</span>{" "}
						and tailored to how you live.
					</h2>

					{/* Body Text */}
					<div className="mt-6 grid gap-6 md:grid-cols-2">
						<p className="text-slate-700 text-[0.95rem] leading-relaxed">
							We craft refined, functional and timeless interiors across
							Telangana & Andhra Pradesh. Every project balances comfort,
							material honesty and detail-driven execution to create meaningful
							spaces.
						</p>

						<p className="text-slate-700 text-[0.95rem] leading-relaxed">
							From concept and planning to material curation, drawings and final
							styling — our team handles every layer with clarity, precision and
							a client-first approach.
						</p>
					</div>

					{/* Features with icons */}
					<div className="mt-7 grid gap-4 md:grid-cols-3">
						{FEATURES.map(({ title, subtitle, icon: Icon }, idx) => (
							<div
								key={title}
								className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 px-3 py-3 text-sm">
								<div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
									<Icon className="h-4 w-4 text-slate-600" />
								</div>
								<div>
									<p
										className="font-semibold text-slate-900"
										style={idx === 2 ? { color: ACCENT } : {}}>
										{title}
									</p>
									<p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
										{subtitle}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Bottom chips */}
					<div className="mt-5 flex flex-wrap gap-2 text-[0.75rem]">
						<span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-slate-600">
							Turnkey Interiors
						</span>
						<span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-slate-600">
							Material &amp; Finish Curation
						</span>
						<span
							className="rounded-full px-3 py-1"
							style={{
								backgroundColor: `${ACCENT}10`,
								border: `1px solid ${ACCENT}`,
								color: ACCENT,
							}}>
							Detail-First Approach
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
