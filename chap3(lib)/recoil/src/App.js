import "./App.css";
import { RecoilRoot } from "recoil";
import FontButton from "./components/recoilExample/FontButton";
import Text from "./components/recoilExample/Text";

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<FontButton></FontButton>
				<Text></Text>
			</RecoilRoot>
		</div>
	);
}

export default App;
