"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";

type MediaItem = {
	id: number;
	type: "image" | "video";
	url: string;
};

const media: MediaItem[] = [
	{
		id: 1,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783358023/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table.jpg_1_ogzdkw.jpg",
	},
	{
		id: 2,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528770/PXL_20260317_082931069_sfvs0p.mp4",
	},
	{
		id: 3,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528770/PXL_20260317_093759239_vezaw6.mp4",
	},
	{
		id: 4,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338579/pexels-artbovich-8089196.jpg_fwqinb.jpg",
	},
	{
		id: 5,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338578/pexels-artbovich-8089188.jpg_lxqg79.jpg",
	},
	{
		id: 6,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338578/pexels-artbovich-8089185.jpg_abntei.jpg",
	},
	{
		id: 7,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338577/minimalist-kitchen-interior-design.jpg_qbclma.jpg",
	},
	{
		id: 8,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338577/pexels-artbovich-8089185_-_Copy.jpg_u1ztyh.jpg",
	},
	{
		id: 9,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774532898/Kasa_interiors_1-2_u61qxw.mov",
	},

	{
		id: 10,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528762/PXL_20260317_092320119_ro1zdm.mp4",
	},
	{
		id: 11,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338533/kitchen_-_Copy.jpg_ralotl.jpg",
	},
	{
		id: 12,
		type: "image",
		url: "https://res.cloudinary.com/qe3svsex/image/upload/v1783338488/cozy-lively-home-interior-design.jpg_pmke9s.jpg",
	},
	{
		id: 13,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528755/PXL_20260317_071233101_wkp1et.mp4",
	},
	{
		id: 14,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528745/PXL_20260317_092916340_tdrffa.mp4",
	},
	{
		id: 15,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528738/PXL_20260317_073911933_gb2yuk.mp4",
	},
	{
		id: 16,
		type: "video",
		url: "https://res.cloudinary.com/dhvcegycq/video/upload/v1774528712/PXL_20260317_081309566_pnowpq.mp4",
	},
];

export default function GalleryGrid() {
	const [selected, setSelected] = useState<MediaItem | null>(null);

	return (
		<>
			{/* Masonry Grid */}
			<div className="px-6 py-10">
				<div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-5 space-y-5">
					{media.map((item) => (
						<div
							key={item.id}
							onClick={() => setSelected(item)}
							className="group relative cursor-pointer overflow-hidden rounded-2xl">
							{item.type === "image" ? (
								<img
									src={item.url}
									alt=""
									className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								/>
							) : (
								<video
									src={item.url}
									muted
									autoPlay
									loop
									playsInline
									className="w-full h-auto rounded-2xl object-cover"
								/>
							)}

							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
							<div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#447f80] transition duration-300" />
						</div>
					))}
				</div>
			</div>

			{/* FULLSCREEN MODAL */}
			{selected && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl"
					onClick={() => setSelected(null)}>
					{/* Close Button */}
					<button
						onClick={() => setSelected(null)}
						className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition">
						<FiX className="text-white w-6 h-6" />
					</button>

					{/* Content */}
					<div
						className="w-full h-full flex items-center justify-center px-4 md:px-10"
						onClick={(e) => e.stopPropagation()}>
						<div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
							{selected.type === "image" ? (
								<img
									src={selected.url}
									alt=""
									className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
								/>
							) : (
								<video
									src={selected.url}
									controls
									autoPlay
									muted
									className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
