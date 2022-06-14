import React from "react";
import ReactDOM from "react-dom";
import ThankyouDialog from "./ThankyouDialog";

const Portal = (props) => {
	const el = document.getElementById("portal");
	return ReactDOM.createPortal(props.children, el);
};

export default function Example() {
	return (
		<div onClick={() => console.log("div")}>
			<Portal>
				<ThankyouDialog />
			</Portal>
			<div style={{ position: "absolute" }}>
				<button>하하하</button>
			</div>
		</div>
	);
}
