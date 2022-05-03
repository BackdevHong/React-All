import { atom, selector } from "recoil";

export const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({ get }) => {
        const fontSize = get(fontSizeState);
        const unit = 'px'

        return `${fontSize}${unit}`
    }
})
export const fontSizeState = atom({
    key: "fontSizeState",
    default: 14,
});
