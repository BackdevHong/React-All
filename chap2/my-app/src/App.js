import "./App.css";
import Composition from "./components/props/Composition";
import Extraction from "./components/props/Extraction/Extraction";
import LifeCycle from "./components/lifeCycle/ClassComponent";
import ConditionalRendering from "./components/conditionalRendering/conditionalRendering";
import List from "./components/list/list";
import WelcomeDialog from "./components/Composition/WelcomeDialog";

function App() {
	return (
		<div className="App">
			<Composition></Composition> {/* 압축 */}
			<Extraction></Extraction> {/* 추출 */}
			<LifeCycle></LifeCycle> {/* 생명주기 */}
			<ConditionalRendering></ConditionalRendering> {/* 조건부 렌더링 */}
			<List></List> {/* 리스트 배열 */}
			<WelcomeDialog /> {/* Dialog */}
		</div>
	);
}

export default App;
