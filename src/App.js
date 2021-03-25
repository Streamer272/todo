import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import { Task } from "./components/task";


const App = () => {
	const [tasks, setTasks] = useState([]);
	const [cookies, setCookie, removeCookie] = useCookies(["data"]);

	const getCookie = (name) => {
		return name === "*" ? cookies : cookies[name];
	}

	const deleteTask = (task) => {
		if (tasks.includes(task)) {
			console.log("Deleting task " + task + "...");
			const updatedTasks = tasks.splice(tasks.indexOf(task), 1);
			setCookie("tasks", JSON.stringify(updatedTasks))
			setTasks(updatedTasks);
		}
	}

	const loadTasks = () => {
		console.log("Loading tasks...");

		for (const taskData of JSON.parse(getCookie("tasks"))) {
			const currentTask = new Task(taskData.name, taskData.description, deleteTask);
			let updatedTasks = tasks;
			updatedTasks.push(currentTask);
			setTasks(updatedTasks);
		}
	}

	const saveTasks = () => {
		console.log("Saving tasks...");

		/*let tasksToBeWrittenInCookies = [];

		for (const t of tasks) {
			tasksToBeWrittenInCookies.push({
				name: t.name,
				description: t.description
			});
		}

		setCookie("tasks", JSON.stringify(tasksToBeWrittenInCookies));*/
	}

	window.onload = loadTasks();
	//setInterval(saveTasks, 10000);
	saveTasks();

	return (
		<div>
			{tasks.map((task) => {
				return task;
			})}
		</div>
	);
}

export { App };
