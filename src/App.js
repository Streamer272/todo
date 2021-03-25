import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/home";
import { CreateTask } from "./components/createTask"


const App = () => {
	return (
		<Router>
			<Route path="/" exact={ true } component={ Home } />
			<Route path="/createTask" exact={ true } component={ CreateTask } />
		</Router>
	);
}

export { App };
