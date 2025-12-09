"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const ACCENT = "#447f80";

const container: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
			staggerChildren: 0.12,
			delayChildren: 0.15,
		},
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" as const },
	},
};

const HIGHLIGHTS = [
	"high-end finishes",
	"detail-oriented craftsmanship",
	"transparent processes",
	"personalised client experience",
];

export default function OurStory() {
	return (
		<section className="w-full bg-white py-16 sm:py-20 lg:py-24">
			<div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch lg:gap-16">
				{/* LEFT */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					className="flex-1 space-y-6">
					<motion.p
						variants={item}
						className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-500">
						<span
							className="h-px w-8 rounded-full"
							style={{ backgroundColor: ACCENT }}
						/>
						Our Story
					</motion.p>

					<motion.h2
						variants={item}
						className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl lg:text-[2.15rem]">
						Kasa Interiors began with a simple idea —{" "}
						<span className="relative whitespace-nowrap">
							<span className="relative">to design with intention</span>
						</span>{" "}
						and execute with integrity.
					</motion.h2>

					<motion.p
						variants={item}
						className="max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
						Over the years, that philosophy has shaped us into a studio trusted
						for meaningful spaces, meticulous detailing and a grounded,
						client-first approach.
					</motion.p>

					<motion.div
						variants={item}
						className="grid gap-3 text-[0.9rem] text-slate-700 sm:grid-cols-2">
						{HIGHLIGHTS.map((point) => (
							<div
								key={point}
								className="group inline-flex items-start gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-transform duration-200 group-hover:-translate-y-0.5">
								<span
									className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-semibold text-white shadow-sm"
									style={{ backgroundColor: ACCENT }}>
									<FiArrowRight className="h-3 w-3" />
								</span>
								<span className="leading-snug capitalize">{point}</span>
							</div>
						))}
					</motion.div>

					<motion.div variants={item} className="pt-2">
						<p className="text-[0.95rem] leading-relaxed text-slate-600">
							What started as a design practice has grown into a{" "}
							<span className="font-medium text-slate-900">
								full-service interior design studio
							</span>{" "}
							offering:
						</p>
						<ul className="mt-3 grid gap-1.5 text-[0.9rem] text-slate-700 sm:grid-cols-2">
							<li>• Concept design &amp; spatial planning</li>
							<li>• Technical drawings &amp; detailing</li>
							<li>• Material &amp; finishes curation</li>
							<li>• On-site execution management</li>
							<li>• Styling &amp; final handover</li>
							<li>• Post-handover support</li>
						</ul>
					</motion.div>
				</motion.div>

				{/* RIGHT */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex-1">
					<div className="relative h-full min-h-[290px] rounded-3xl bg-linear-to-br from-slate-100 via-white to-slate-50 p-px shadow-[0_22px_70px_rgba(15,23,42,0.14)]">
						<div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[1.6rem] bg-slate-50/90 p-4 sm:p-5 lg:flex-row lg:p-6">
							{/* Fixed gradients */}
							<div className="pointer-events-none absolute inset-0 opacity-70">
								<div className="h-full w-full bg-[radial-gradient(circle_at_100%_0\,rgba(68,127,128,0.16)\,transparent_60%) ,linear-gradient(to_right\,rgba(226,232,240,0.85)_1px\,transparent_1px) ,linear-gradient(to_bottom\,rgba(226,232,240,0.6)_1px\,transparent_1px)] bg-size[180px_180px,52px_52px,52px_52px]" />
							</div>

							{/* IMAGE */}
							<div className="relative flex flex-1 items-center justify-center">
								<motion.div
									whileHover={{ y: -4, rotateX: 3 }}
									transition={{ type: "spring", stiffness: 140, damping: 18 }}
									style={{ transformPerspective: 1200 }}
									className="relative h-56 w-full max-w-sm sm:h-64 lg:h-72">
									<div className="absolute -left-6 -top-4 h-[84%] w-[46%] rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-sm" />

									<div className="relative h-full w-full overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.25)]">
										<Image
											src="https://res.cloudinary.com/djthwunnh/image/upload/v1764151955/villa-HD_ywgpac.jpg"
											alt="Kasa Interiors villa project – contemporary façade with warm lighting"
											fill
											className="object-cover"
											priority
										/>
										<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/5 to-transparent" />

										<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[0.7rem] text-slate-50">
											<div className="flex flex-col gap-0.5">
												<span className="font-medium">
													Villa exterior, Hyderabad
												</span>
												<span className="text-slate-200">
													Clean lines, warm lighting, balanced proportions.
												</span>
											</div>
											<span className="rounded-full bg-black/55 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]">
												Kasa Interiors
											</span>
										</div>
									</div>
								</motion.div>

								<div
									className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full opacity-30 blur-2xl"
									style={{ backgroundColor: ACCENT }}
								/>
							</div>

							{/* MATERIALS */}
							<div className="relative flex flex-1 flex-col justify-between gap-6 lg:pl-4">
								<div className="space-y-4">
									<div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[0.7rem] font-medium tracking-[0.18em] text-slate-500 shadow-sm">
										<span
											className="inline-flex h-1.5 w-1.5 rounded-full"
											style={{ backgroundColor: ACCENT }}
										/>
										BUILT AROUND HOW YOU LIVE
									</div>

									<h3 className="text-[1.1rem] font-semibold leading-snug text-slate-900 sm:text-[1.25rem]">
										Thoughtful layouts, honest materials and{" "}
										<span style={{ color: ACCENT }}>
											quiet, timeless details
										</span>
										.
									</h3>

									<p className="text-[0.9rem] leading-relaxed text-slate-600">
										Every project balances architecture, interiors and landscape
										so spaces feel cohesive — from the façade to the smallest
										corner inside.
									</p>
								</div>

								<div className="space-y-3">
									<p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
										Materials we love
									</p>

									<div className="flex flex-wrap gap-3 text-[0.75rem]">
										{/* Wood */}
										<div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
											<span
												className="h-7 w-7 rounded-[0.9rem] border border-slate-200"
												style={{ backgroundColor: "#f4e8d8" }}
											/>
											<div className="leading-tight">
												<p className="font-medium text-slate-800">
													Warm wood tones
												</p>
												<p className="text-[0.7rem] text-slate-500">
													For comfort &amp; depth.
												</p>
											</div>
										</div>

										{/* Neutrals */}
										<div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
											<span
												className="h-7 w-7 rounded-[0.9rem] border border-slate-200"
												style={{ backgroundColor: "#f5f5f6" }}
											/>
											<div className="leading-tight">
												<p className="font-medium text-slate-800">
													Soft neutrals
												</p>
												<p className="text-[0.7rem] text-slate-500">
													To keep spaces calm.
												</p>
											</div>
										</div>

										{/* Accent Green */}
										<div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
											<span
												className="h-7 w-7 rounded-[0.9rem] border border-slate-200"
												style={{ backgroundColor: ACCENT }}
											/>
											<div className="leading-tight">
												<p className="font-medium text-slate-800">
													Accent greens
												</p>
												<p className="text-[0.7rem] text-slate-500">
													For freshness &amp; contrast.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="flex items-center gap-3 text-[0.7rem] text-slate-500">
									<span className="inline-flex h-16 w-16 items-center justify-center overflow-hidden">
										<Image
											src="https://res.cloudinary.com/djthwunnh/image/upload/v1764150280/logo-web-1_miqcdh.png"
											alt="Kasa Interiors Logo"
											width={68}
											height={68}
											className="object-contain"
										/>
									</span>
									<span className="max-w-[190px] leading-snug">
										Spaces that feel considered on day one — and still right
										years later.
									</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
