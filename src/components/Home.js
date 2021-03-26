import {useCookies} from "react-cookie";
import {useState} from "react";
// Components
import { Task } from "./Task";
// Images
import AddImage from "../images/add.png";


const Home = () => {
	const [cookies, setCookie] = useCookies(["data"]);
	const [tasks, setTasks] = useState(cookies["tasks"]);

    const setTasksTo = (object) => {
        setCookie("tasks", object);
        setTasks(object);
    }

	const deleteTask = (task) => {
		if (tasks.includes(task)) {
			console.log("Deleting task " + task + "...");

			const updatedTasks = tasks.splice(tasks.indexOf(task), 1);
			setTasksTo(updatedTasks);
		}
	}

	window.onload = () => {
    	console.log(tasks);
	};

	return (
		<div>
			<button onClick={() => { window.location = "/createTask" }}
				style={{width: "2.5%", height: "4.5%", marginLeft: "60%", marginTop: "0.9%", backgroundColor: "white", border: "none"}} >
				<img src={ AddImage } alt="Add" style={{marginLeft: "-0.45%", marginTop: "-0.09%"}} />
			</button>

			<div>
				{tasks.map((task) => <Task taskData={ task } deleteCallback={ deleteTask } />)}
			</div>
		</div>
	);
}

export { Home };
