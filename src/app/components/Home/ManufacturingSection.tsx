"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";

const ACCENT = "#447f80";

const VIDEO_URL =
	"https://res.cloudinary.com/qe3svsex/video/upload/v1783338502/IMG_9646_pfz3ye.mov";

export default function ManufacturingSection() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const playVideo = async () => {
		if (!videoRef.current) return;

		try {
			await videoRef.current.play();
			setPlaying(true);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section
			id="factory"
			className="relative overflow-hidden bg-[#F7F6F3] py-28 lg:py-36">
			{/* Background Accent */}

			<div
				className="absolute left-0 top-0 h-full w-[40%]"
				style={{
					background:
						"linear-gradient(180deg, rgba(68,127,128,.06), transparent)",
				}}
			/>

			{/* Huge Background Text */}

			<div className="pointer-events-none absolute left-1/2 top-20 hidden -translate-x-1/2 select-none lg:block">
				<h2 className="text-[170px] font-black uppercase tracking-[0.25em] text-black/[0.03]">
					FACTORY
				</h2>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mb-16 max-w-xl">
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}>
						<span
							className="inline-block rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em]"
							style={{
								background: "rgba(68,127,128,.08)",
								color: ACCENT,
							}}>
							Own Manufacturing Facility
						</span>

						<h2 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-[#1B1B1B] lg:text-7xl">
							Built
							<br />
							<span style={{ color: ACCENT }}>In-house.</span>
						</h2>

						<p className="mt-8 max-w-lg text-lg leading-9 text-slate-600">
							Every wardrobe, kitchen and interior element is crafted inside our
							own production facility using advanced machinery and experienced
							craftsmen— delivering precision that outsourced manufacturing
							simply cannot match.
						</p>

						<div className="mt-10 flex flex-wrap gap-5">
							{/* <Link
								href="/manufacturing"
								className="group inline-flex items-center gap-3 rounded-full bg-[#1f1f1f] px-8 py-4 font-medium text-white transition duration-300 hover:-translate-y-1">
								Explore Factory
								<ArrowRight
									size={18}
									className="transition duration-300 group-hover:translate-x-1"
								/>
							</Link> */}

							<div className="flex items-center gap-3">
								<div
									className="h-3 w-3 rounded-full"
									style={{
										background: ACCENT,
									}}
								/>

								<p className="text-sm uppercase tracking-[0.22em] text-slate-500">
									100% In-house Production
								</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* ===========================
				    Image Composition
				=========================== */}

				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="group relative overflow-hidden rounded-[36px] lg:rounded-[42px] shadow-[0_35px_90px_rgba(15,23,42,.16)]">
						<div className="relative aspect-[4/5] w-full lg:h-[550px] lg:aspect-auto">
							<video
								ref={videoRef}
								className="absolute inset-0 z-10 h-full w-full object-cover"
								controls
								playsInline
								preload="metadata"
								controlsList="nodownload"
								src={VIDEO_URL}
								poster="https://res.cloudinary.com/ddeadwjwc/image/upload/v1783353121/WhatsApp_Image_2026-07-06_at_9.21.35_PM_rknfge.jpg"
								muted
								onPause={() => setPlaying(false)}
								onPlay={() => setPlaying(true)}
							/>

							{/* Overlay */}
							<div
								className={`absolute inset-0 transition-all duration-500 ${
									playing
										? "pointer-events-none bg-black/20"
										: "pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-black/10"
								}`}
							/>

							{/* Top Badge */}

							<div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/90 px-5 py-2 backdrop-blur-xl">
								<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-700">
									Manufacturing Tour
								</p>
							</div>

							{/* Bottom Text */}

							<motion.div
								animate={{
									y: playing ? 20 : 0,
									opacity: playing ? 0 : 1,
								}}
								className="absolute bottom-8 left-8 right-8">
								<p className="text-xs uppercase tracking-[0.35em] text-white/75">
									Precision • Innovation • Craftsmanship
								</p>

								<h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white lg:text-5xl">
									Take a Tour of
									<br />
									Our Factory.
								</h3>
							</motion.div>

							{/* Play Button */}

							{!playing && (
								<button
									onClick={playVideo}
									className="absolute inset-0 z-20 flex items-center justify-center group">
									{/* Soft Glow */}
									<div className="absolute h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-110" />

									{/* Pulse Ring */}
									<div className="absolute h-28 w-28 rounded-full border border-white/20 animate-ping" />

									{/* Main Button */}
									<div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
										<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
											<Play
												size={34}
												fill="currentColor"
												className="ml-1 text-[#1b1b1b]"
											/>
										</div>
									</div>
								</button>
							)}

							{/* Playing Badge */}

							{playing && (
								<div className="absolute right-5 top-5 z-20  rounded-full bg-black/45 px-4 py-2 backdrop-blur-lg">
									<div className="flex items-center gap-2 text-white">
										<Pause size={14} />

										<span className="text-xs font-medium uppercase tracking-wider">
											Playing
										</span>
									</div>
								</div>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
