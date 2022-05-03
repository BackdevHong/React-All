import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

export default function Text() {
	const [fontSize] = useRecoilState(fontSizeState);
	return (
		<div>
			<p style={{ fontSize }}>Text</p>
		</div>
	);
}
