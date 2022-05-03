import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeState, fontSizeLabelState } from "./store";

export default function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState)
    return (
        <>
            
            <div>Current font size : {fontSizeLabel}</div>
            <button
                onClick={() => setFontSize((size) => size + 1)}
            >
                크기를 높이자 히히
            </button>
        </>
	);
}
