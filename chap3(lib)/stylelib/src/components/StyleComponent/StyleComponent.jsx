import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

export default function StyleComponent() {
	// const Title = styled.h1`
	// 	font-size: 1.5em;
	// 	text-align: center;
	// 	color: palevioletred;
	// `;

	const Wrapper = styled.section`
		padding: 4em;
		background: papayawhip;
	`;
	// const Button = styled.button`
	// /* Adapt the colors based on primary prop */
	//     background: ${props => props.primary ? "palevioletred" : "white"};
	//     color: ${props => props.primary ? "white" : "palevioletred"};
	//     font-size: 1em;
	//     margin: 1em;
	//     padding: 0.25em 1em;
	//     border: 2px solid palevioletred;
	//     border-radius: 3px;
	// `;

	// const TomatoButton = styled(Button)`
	//     color: tomato;
	//     border-color: tomato;
	// `;

	// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
	//     color: blue;

	//     &:hover {
	//         color: red; // <Thing> when hovered
	//     }

	//     & ~ & {
	//         background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
	//     }

	//     & + & {
	//         background: lime; // <Thing> next to <Thing>
	//     }

	//     &.something {
	//         background: orange; // <Thing> tagged with an additional CSS class ".something"
	//     }

	//     .something-else & {
	//         border: 1px solid; // <Thing> inside another element labeled ".something-else"
	//     }
	// `

	// const Input = styled.input.attrs(props => ({
	//     // we can define static props
	//     type: "text",

	//     // or we can define dynamic ones
	//     size: props.size || "1em",
	//     }))`
	//     color: palevioletred;
	//     font-size: 1em;
	//     border: 2px solid palevioletred;
	//     border-radius: 3px;

	//     /* here we use the dynamically computed prop */
	//     margin: ${props => props.size};
	//     padding: ${props => props.size};
	// `;

	// const PasswordInput = styled(Input).attrs({
	//     type: "password",
	// })`
	//     // similarly, border will override Input's border
	//     border: 2px solid aqua;
	// `;
	// const ReversedButton = ( props ) => (
	//     <Button {...props} children={props.children.split('').reverse()} />
	// )

	// const rotate = keyframes`
	//     from {
	//         transform: rotate(0deg);
	//     }

	//     to {
	//         transform: rotate(360deg);
	//     }
	// `;
	const Button = styled.button`
		font-size: 1em;
		margin: 1em;
		padding: 0.25em 1em;
		border-radius: 3px;
		user-select: none;
		/* Color the border and text with theme.main */
		color: ${(props) => props.theme.color};
		border: 2px solid ${(props) => props.theme.borderColor};
	`;
	// Define what props.theme will look like
	const defaultTheme = {
		color: "green",
		borderColor: "Black",
	};
	// // Here we create a component that will rotate everything we pass in over two seconds
	// const Rotate = styled.div`
	// 	display: inline-block;
	// 	animation: ${rotate} 2s linear infinite;
	// 	padding: 2rem 1rem;
	// 	font-size: 1.2rem;
	// `;

	const red = {
		color: "red",
		borderColor: "Black",
	};

	const blue = {
		color: "blue",
		borderColor: "Black",
	};

	const [theme, setTheme] = useState(defaultTheme);
	return (
		<Wrapper>
			<button
				onClick={() => setTheme(red)}
				style={{ userSelect: "none" }}
			>
				red
			</button>
			<button
				onClick={() => setTheme(blue)}
				style={{ userSelect: "none" }}
			>
				blue
			</button>
			{/* <Title>
            Hello World! 
        </Title>
        <Button onClick={() => {alert("Normal")}}>Normal</Button>
        <Button onClick={() => {alert("Primary")}} primary>Primary</Button>
        <TomatoButton>New Component</TomatoButton>
        <br />
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
            <Button as={ReversedButton}>Custom Button with Reverse</Button>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
        <div className="something-else">
            <Thing>Splendid.</Thing>
            </div>
        <br />
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        <PasswordInput placeholder="A bigger password input" size="2em" /> 
			<Title>빙빙 돌아가는 회전목마~</Title>
    <Rotate>&lt; 🎠 &gt;</Rotate> */}
			<ThemeProvider theme={theme}>
				<Button>Normal</Button>
				<Button>Themed</Button>
			</ThemeProvider>
		</Wrapper>
	);
}
