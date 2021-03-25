import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import { Task } from "./task";
// Images
import addImage from "../images/add.png";


const Home = () => {
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
        const tasksInCookies = getCookie("tasks") || [];

        for (const taskData of tasksInCookies) {
            addTask(
                <Task taskName={ taskData.name } taskDescription={ taskData.description } />
            );
        }

        console.log(tasks);
	}

	const saveTasks = () => {
		console.log("Saving tasks...");

		let tasksData = [];

		for (const t of tasks) {
			tasksData.push({
				name: t.name,
				description: t.description
			});
		}

		setCookie("tasks", JSON.stringify(tasksData));
	}

	const addTask = (task) => {
        console.log("Adding task " + task);
		const updatedTasks = tasks;
		updatedTasks.push(task);
		setTasks(updatedTasks);
	}

    window.onload = () => { loadTasks() }; // loads tasks

	return (
		<div>
			<button onClick={() => { window.location = "/createTask" }}
				style={{width: "2.5%", height: "4.5%", marginLeft: "60%", marginTop: "0.9%", backgroundColor: "white", border: "none"}} >
				<img src={ addImage } alt="Add" style={{marginLeft: "-0.45%", marginTop: "-0.09%"}}></img>
			</button>

            <div>
                {tasks.map((task) => {
                    console.log("Task: " + task);
                    return <Task taskName={ task.name } taskDescription={ task.description } />;
                })}
            </div>
		</div>
	);
}

export { Home };
