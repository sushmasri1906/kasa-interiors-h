import React from "react";
import ContactBanner from "../components/contact/ContactBanner";
import ContactTalkAndForm from "../components/contact/ContactKasa";
import Address from "../components/contact/Address";

function page() {
	return (
		<div>
			<ContactBanner />
			<ContactTalkAndForm />
			<Address />
		</div>
	);
}

export default page;
