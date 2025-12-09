"use client";

import { FiMapPin, FiClock } from "react-icons/fi";

const ACCENT = "#447f80";

export default function Address() {
	return (
		<section className="w-full bg-linear-to-br from-[#f7fbfb] via-white to-[#f4f7f7] py-14">
			<div className="mx-auto max-w-5xl px-6">
				<div className="relative overflow-hidden rounded-3xl bg-white/90 px-6 py-8 shadow-[0_22px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 sm:px-8 sm:py-9">
					{/* soft background accent */}
					<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
						<div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(68,127,128,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_55%)]" />
					</div>

					{/* Label row */}
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div>
							<p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
								Address
							</p>
							<h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-[1.4rem]">
								Visit Our Studio
							</h2>
						</div>

						<span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
							<span
								className="h-1.5 w-1.5 rounded-full"
								style={{ backgroundColor: ACCENT }}
							/>
							Kasa Interiors Studio
						</span>
					</div>

					{/* Accent line */}
					<div className="mt-4 h-0.5 w-full rounded-full bg-slate-100">
						<div className="h-full w-28 rounded-full bg-linear-to-r from-[#c5e1df] via-[#7aa9a6] to-[#447f80]" />
					</div>

					{/* Main content */}
					<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
						{/* Address block */}
						<div className="flex items-start gap-4">
							<div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef6f5] shadow-sm ring-1 ring-slate-200/70">
								<FiMapPin className="h-5 w-5" style={{ color: ACCENT }} />
							</div>

							<div className="space-y-1 text-sm text-slate-800">
								<p className="font-semibold text-slate-900">
									Kasa Interiors Studio
								</p>
								<p className="text-[0.9rem] leading-relaxed text-slate-700">
									Flat No. 301, Grecious Homes
									<br />
									Mytri Nagar, Madinaguda
									<br />
									Miyapur, Hyderabad – 500049
									<br />
									Telangana, India
								</p>
							</div>
						</div>

						{/* Appointment info */}
						<div className="rounded-2xl bg-slate-50/80 p-4 text-[0.9rem] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
							<div className="mb-2 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
								<FiClock className="h-4 w-4" style={{ color: ACCENT }} />
								<span>Studio Visits</span>
							</div>
							<p className="leading-relaxed">
								Our studio is open for consultations{" "}
								<span className="font-medium text-slate-900">
									by appointment
								</span>
								. We’ll walk you through{" "}
								<span className="font-medium">
									materials, finishes, layouts and ideas
								</span>{" "}
								for your space so you can see and feel options before deciding.
							</p>
						</div>
					</div>

					{/* Small footnote */}
					<p className="mt-5 text-[0.78rem] text-slate-500">
						Parking assistance is available near the building. Exact location &
						slot details will be shared once your visit is scheduled.
					</p>
				</div>
			</div>
		</section>
	);
}
