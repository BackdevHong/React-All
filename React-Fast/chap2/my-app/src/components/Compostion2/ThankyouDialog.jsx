import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
	return (
		<div>
			<Dialog
				title={<h1 style={{ color: "purple" }}> Thanks </h1>}
				desc="it is Test to meet you"
				button={
					<button
						style={{
							backgroundColor: "blue",
							color: "white",
						}}
					>
						close
					</button>
				}
			/>
		</div>
	);
}
