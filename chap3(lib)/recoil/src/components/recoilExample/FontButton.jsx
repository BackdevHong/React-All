import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

export default function FontButton() {
	const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
        <>
            <button
                onClick={() => setFontSize((size) => size + 1)}
            >
                크기를 높이자 히히
            </button>
        </>
	);
}
