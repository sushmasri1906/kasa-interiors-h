"use client";

import { motion, type Variants } from "framer-motion";
import { FiPenTool, FiTool, FiCheckCircle } from "react-icons/fi";

const ACCENT = "#447f80";

const STEPS = [
	{
		id: 1,
		title: "Design & Deal",
		desc: "We understand your lifestyle, study the space and create concepts, moodboards and estimates tailored to your needs.",
		icon: FiPenTool,
	},
	{
		id: 2,
		title: "Execution & Installation",
		desc: "Our team manages drawings, production and site work — from kitchens and wardrobes to finishes and styling.",
		icon: FiTool,
	},
	{
		id: 3,
		title: "Quality Check & Move In",
		desc: "Every detail is checked, snag lists are closed and the site is handed over ready to move in and enjoy.",
		icon: FiCheckCircle,
	},
];

const container: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut" as const,
			staggerChildren: 0.1,
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
			duration: 0.45,
			ease: "easeOut" as const,
		},
	},
};

export default function HowItWorks() {
	return (
		<section className="w-full bg-[#f5f7f7] py-16 sm:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* heading */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="text-center"
				>
					<motion.p
						variants={item}
						className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-500"
					>
						How It Works
					</motion.p>

					<motion.h2
						variants={item}
						className="mt-2 text-2xl sm:text-3xl lg:text-[2.1rem] font-semibold tracking-[0.18em] text-slate-900 uppercase"
					>
						Our{" "}
						<span style={{ color: ACCENT }} className="font-extrabold">
							Working
						</span>{" "}
						Process
					</motion.h2>

					<motion.p
						variants={item}
						className="mt-4 mx-auto max-w-xl text-sm sm:text-base text-slate-600"
					>
						A clear, three-step journey from first conversation to move-in day.
					</motion.p>
				</motion.div>

				{/* cards + connecting line */}
				<div className="relative mt-12">
					<div className="pointer-events-none absolute inset-x-[8%] top-10 hidden h-px bg-slate-200 md:block" />

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						className="grid gap-8 md:grid-cols-3"
					>
						{STEPS.map((step) => {
							const Icon = step.icon;

							return (
								<motion.article
									key={step.id}
									variants={item}
									whileHover={{
										y: -10,
										scale: 1.02,
										boxShadow: "0 28px 80px rgba(15,23,42,0.22)",
									}}
									transition={{
										type: "spring",
										stiffness: 220,
										damping: 20,
									}}
									className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 px-6 pt-14 pb-8 text-center shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
								>
									{/* ICON */}
									<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
										<div
											className="
												relative flex h-16 w-16 items-center justify-center 
												rounded-full border-[3px] border-[#447f80] bg-white 
												transition-all duration-500 
												shadow-[0_10px_30px_rgba(15,23,42,0.18)]
												group-hover:bg-[#447f80]
												group-hover:border-[#447f80]
												group-hover:shadow-[0_0_0_2px_#447f8066,0_0_35px_#447f8080]
											"
										>
											<Icon
												className="
													h-7 w-7 
													text-[#447f80]
													transition-colors duration-500
													group-hover:text-white
												"
											/>

											{/* glow ring */}
											<div
												className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
												style={{
													boxShadow: `0 0 0 8px ${ACCENT}25`,
												}}
											/>
										</div>
									</div>

									<p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
										Step {String(step.id).padStart(2, "0")}
									</p>

									<h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
										{step.title}
									</h3>

									<p className="mt-4 text-sm leading-relaxed text-slate-700">
										{step.desc}
									</p>

									{/* bottom accent bar */}
									<div className="mt-6 flex flex-col items-center gap-2">
										<div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
											<div
												className="h-full w-0 rounded-full transition-all duration-300 group-hover:w-full"
												style={{
													background: `linear-gradient(to right, ${ACCENT}, ${ACCENT}cc)`,
												}}
											/>
										</div>
										<span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
											Design · Build · Handover
										</span>
									</div>
								</motion.article>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
