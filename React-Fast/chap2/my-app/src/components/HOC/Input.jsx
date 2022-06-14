import React from "react";
import withLoading from "./withLoading";

function input() {
	return <input defaultValue="input" />;
}

export default withLoading(input);
