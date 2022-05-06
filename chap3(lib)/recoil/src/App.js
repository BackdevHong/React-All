import "./App.css";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoExample/TodoList";
// import FontButton from "./components/recoilExample/FontButton";
// import Text from "./components/recoilExample/Text";
// import Charactor from "./components/recoilExample/Charactor";


function App() {
    return (
        <div className="App">
            <RecoilRoot>
                {/* <FontButton></FontButton>
                <Text></Text>
                <Charactor></Charactor> */}
                <TodoList></TodoList>
            </RecoilRoot>
        </div>
    );
}

export default App;
