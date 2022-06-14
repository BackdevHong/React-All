import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Example from "./components/ReactQueryExample/Example";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Example></Example>
			</QueryClientProvider>
		</div>
	);
}

export default App;
