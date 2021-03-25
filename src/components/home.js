import { useState } from "react";
import { useCookies } from "react-cookie";
// Components
import { Task } from "./Task";
// Images
import addImage from "../images/add.png";


const Home = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["data"]);

	const getTasks = () => {
		return cookies["tasks"] || [];
	}

    const setTasks = (object) => {
        setCookie("tasks", object);
    }

	const deleteTask = (task) => {
		if (getTasks().includes(task)) {
			console.log("Deleting task " + task + "...");

			const updatedTasks = getTasks().splice(getTasks().indexOf(task), 1);
			setTasks(updatedTasks);
		}
	}

	const loadTasks = () => {
		console.log("Loading tasks...");
        const tasks = getTasks();

        for (const taskData of tasks) {
            addTask(taskData);
        }

        console.log(getTasks());
	}

	const saveTasks = () => {
		console.log("Saving tasks...");

		let tasksData = [];

		for (const t of getTasks()) {
			tasksData.push({
				name: t.name,
				description: t.description
			});
		}

		setTasks(tasksData);
	}

	const addTask = (task) => {
        console.log("Adding task " + task);
        
		const updatedTasks = getTasks();
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
                {getTasks().map((task) => {
                    console.log("Mapping task: " + task);
                    return <Task taskName={ task.name } taskDescription={ task.description } />;
                })}
            </div>
		</div>
	);
}

export { Home };
