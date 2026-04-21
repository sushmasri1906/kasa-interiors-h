"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileBottomCTA() {
	return (
		<div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
			{/* Container */}
			<div className="mx-3 mb-3 rounded-xl border border-black/10 bg-white shadow-lg">
				<div className="flex items-center justify-between px-4 py-3">
					{/* 📞 CALL */}
					<a
						href="tel:+917675031977"
						className="flex items-center gap-2 text-sm font-medium text-gray-700">
						<div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#41807e]/10">
							<FaPhoneAlt size={12} className="text-[#41807e]" />
						</div>
						<span>+917675031977</span>
					</a>

					{/* Divider */}
					<div className="h-6 w-px bg-gray-200" />

					{/* ⚡ CTA */}
					<Link
						href="/consultation"
						className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
						style={{
							background: "#41807e",
							color: "white",
						}}>
						Get Estimate
					</Link>
				</div>
			</div>
		</div>
	);
}
