"use client";
// src="https://res.cloudinary.com/djthwunnh/image/upload/v1764150280/logo-web-1_miqcdh.png"

import Link from "next/link";
import Image from "next/image";
import {
	FiMail,
	FiPhone,
	FiMapPin,
	FiInstagram,
	FiFacebook,
} from "react-icons/fi";

export default function Footer() {
	return (
		<footer className="w-full border-t border-[#5fa1a2] bg-[#447f80]">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
					{/* Logo */}
					<div className="space-y-3">
						<div className="relative h-10 w-32 bg-white py-4 px-3 rounded-2xl">
							<Image
								src="https://res.cloudinary.com/djthwunnh/image/upload/v1764150280/logo-web-1_miqcdh.png"
								alt="Kasa Interiors"
								fill
								className="object-contain"
							/>
						</div>
						<p className="text-xs leading-relaxed text-slate-100 max-w-[200px]">
							Premium interiors for homes, apartments & commercial spaces.
						</p>
					</div>

					{/* Menu */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Menu
						</h4>
						<ul className="mt-3 space-y-2 text-sm">
							{[
								{ label: "Home", href: "/" },
								{ label: "About", href: "/about" },
								{ label: "Services", href: "/services" },
								{ label: "Portfolio", href: "/gallery" },
								{ label: "Contact", href: "/contact" },
							].map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="text-slate-200 text-[13px] hover:text-white transition">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Contact
						</h4>

						<div className="mt-3 space-y-3 text-[13px] text-slate-200">
							<div className="flex items-start gap-2">
								<FiMail className="mt-1 text-white" />
								<a
									href="mailto:srinivas@kasainteriors.in"
									className="hover:text-white">
									srinivas@kasainteriors.in
								</a>
							</div>

							<div className="flex items-start gap-2">
								<FiPhone className="mt-1 text-white" />
								<div>
									<a href="tel:+917675031977" className="hover:text-white">
										+91 76750 31977
									</a>
									<br />
									<a href="tel:+919542872999" className="hover:text-white">
										+91 95428 72999
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Manufacturing Unit */}
					<div>
						<h4 className="text-xs  font-semibold uppercase tracking-[0.2em] text-white">
							Factory
						</h4>

						<div className="mt-4 ">
							<div className="flex items-start gap-3">
								<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#5fa1a2]/20">
									<FiMapPin className="text-[#8fd3d4]" />
								</div>

								<div className="text-[13px] leading-6 text-slate-200">
									<p className="font-semibold text-white">B-25</p>
									<p>BHEL Ancillary Industrial Estate</p>
									<p>TGIIC, Ramachandrapuram</p>
									<p>Hyderabad, Rangareddy</p>
									<p>Telangana – 502032</p>
								</div>
							</div>
						</div>
					</div>
					{/* Studios */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Studios
						</h4>

						<div className="mt-4 space-y-5">
							<div className="flex gap-3">
								<FiMapPin className="mt-1 text-white shrink-0" />
								<div className="text-[13px] leading-6 text-slate-200">
									<p className="font-semibold text-white">Hyderabad</p>
									<p>Mytri Nagar, Miyapur 500049</p>
								</div>
							</div>

							<div className="flex gap-3">
								<FiMapPin className="mt-1 text-white shrink-0" />
								<div className="text-[13px] leading-6 text-slate-200">
									<p className="font-semibold text-white">Vijayawada</p>
									<p>Ramakrishna Puram 520003</p>
								</div>
							</div>

							<div className="flex gap-3">
								<FiMapPin className="mt-1 text-white shrink-0" />
								<div className="text-[13px] leading-6 text-slate-200">
									<p className="font-semibold text-white">Visakhapatnam</p>
									<p>Akkayyapalem 530016</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				{/* Bottom bar */}
				<div className="mt-8 border-t border-[#5fa1a2] pt-4 pb-24 md:pb-4">
					<div className="flex flex-col items-center gap-4 text-center text-[12px] text-slate-200 md:flex-row md:justify-between">
						<p>
							© {new Date().getFullYear()} Kasa Interiors. All rights reserved.
						</p>

						{/* HSDev Branding */}
						<div className="flex items-center gap-1">
							<span>Developed by</span>

							<a
								href="https://hsdev.in"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold hover:text-white transition">
								HSDev
							</a>
						</div>

						{/* Socials */}
						<div className="flex items-center gap-4">
							<Link
								href="https://www.instagram.com/kasa_interiors_hyd?igsh=MXJwaGwxc2xrdmhjeQ%3D%3D&utm_source=qr"
								target="_blank"
								className="hover:text-white transition">
								<FiInstagram className="text-lg" />
							</Link>

							<Link
								href="https://www.facebook.com/share/1Dft67KmbD/"
								target="_blank"
								className="hover:text-white transition">
								<FiFacebook className="text-lg" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
