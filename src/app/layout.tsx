import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import MobileBottomCTA from "@/app/components/common/MobileBottomCTA";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kasa Interiors",
	description: "Elevate Your Space with Expert Interior Design Solutions",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* MAIN CONTENT */}
				<main className="flex flex-col bg-slate-50 text-slate-900">
					<Navbar />

					{/* 🔥 IMPORTANT: padding bottom for CTA */}
					<div className="pb-20 md:pb-0">{children}</div>

					<Footer />
				</main>

				{/* FLOATING ELEMENTS (OUTSIDE MAIN) */}
				<WhatsAppButton />
				<MobileBottomCTA />
			</body>
		</html>
	);
}
