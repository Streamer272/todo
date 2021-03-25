import { useState } from "react";
import { getCookie, setCookie } from "./cookieManager";
// Components
import { Task } from "./components/task";

const App = () => {
	const [tasks, setTasks] = useState([]);

	const DeleteTask = (task) => {
		if (tasks.includes(task)) {
			console.log("Deleting task " + task + "...");
			setTasks(tasks.splice(tasks.indexOf(task), 1));
		}
	}

	const loadTasks = () => {
		console.log("Loading tasks...");

		const tasksInCookies = JSON.parse(getCookie("tasks")) || [];

		for (const taskData of tasksInCookies) {
			const currentTask = new Task(taskData.name, taskData.description, DeleteTask);
			let updatedTasks = tasks;
			updatedTasks.push(currentTask);
			setTasks(updatedTasks);
		}
	}

	const saveTasks = () => {
		console.log("Saving tasks...");

		let tasksToBeWrittenInCookies = [];

		for (const t of tasks) {
			tasksToBeWrittenInCookies.push({
				name: t.name,
				description: t.description
			});
		}

		setCookie("tasks", JSON.stringify(tasksToBeWrittenInCookies));
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
