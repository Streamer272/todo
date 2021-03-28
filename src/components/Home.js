import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import { Task } from "./Task";
// Images
import AddImage from "../images/add.png";


function removeAt(array, index) {
	let removedArray = [];

	for (let i = 0; i < array.length; i++) {
		if (i !== index) {
			removedArray.push(array[i]);
		}
	}

	return removedArray;
}


const Home = () => {
	const [cookies, setCookie] = useCookies(["data"]);
	const [tasks, setTasks] = useState(cookies["tasks"]);

    const setTasksTo = (object) => {
        setCookie("tasks", object);
        setTasks(object);
    }

	const deleteTask = (task) => {
		if (tasks.includes(task)) {
			setTasksTo(removeAt(tasks, tasks.indexOf(task)));
		}
	}

	window.onload = () => {};

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
