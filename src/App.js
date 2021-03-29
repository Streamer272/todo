import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateTask, EditTask } from "./components/ManageTask";


const App = () => {
	return (
		<Router>
			<Route path="/" exact={ true } component={ Home } />
			<Route path="/createTask" exact={ true } component={ CreateTask } />
			<Route path="/editTask" exact={ false } component={ EditTask } />
		</Router>
	);
}

export { App };
