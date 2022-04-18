import React from "react";
import CustomDialog from "./CustomDialog";
// import Dialog from "./Dialog";

export default function WelcomeDialog() {
	return (
		// <div>
		// 	<Dialog>
		// 		<h1>Welcome!</h1>
		// 		<h3>Thank You!</h3>
		// 	</Dialog>
		// </div>
		<CustomDialog title="Welcome" desc="To My Webpage" />
	);
}
