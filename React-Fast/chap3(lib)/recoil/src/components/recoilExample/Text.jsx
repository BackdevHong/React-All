import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

export default function Text() {
	const [fontSize] = useRecoilState(fontSizeState);
	return (
		<div>
			<p style={{ fontSize }}>이 글자가 커질것입니다..</p>
		</div>
	);
}
