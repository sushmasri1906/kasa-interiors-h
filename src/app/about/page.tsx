import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import AboutIntro from "../components/about/AboutIntro";
import Motto from "../components/about/Motto";
import OurStory from "../components/about/OurStory";

function page() {
	return (
		<>
			<AboutBanner />

			<Motto />
			<AboutIntro />
			<OurStory />
		</>
	);
}

export default page;
