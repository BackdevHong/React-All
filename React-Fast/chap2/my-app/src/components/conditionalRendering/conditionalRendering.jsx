import React from "react";

function UserGreeting(props) {
	return (
		<h1>
			{props.name && props.name + ","} Welcome{" "}
			{Boolean(props.count) && `it's ${props.count} times`}
		</h1>
	);
}

function GuestGreeting() {
	return <h1>please sign up.</h1>;
}

function Greeting(props) {
	return props.isLoggedIn ? (
		<UserGreeting name="Jimmy" count={10} />
	) : (
		<GuestGreeting />
	);
}

export default function conditionalRendering() {
	const isLoggedIn = true;

	return (
		<div>
			<Greeting isLoggedIn={isLoggedIn}></Greeting>
		</div>
	);
}
