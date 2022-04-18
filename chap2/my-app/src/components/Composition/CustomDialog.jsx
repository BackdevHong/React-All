import React from "react";

export default function CustomDialog(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<h3>{props.desc}</h3>
		</div>
	);
}
