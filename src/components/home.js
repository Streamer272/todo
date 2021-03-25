import { useCookies } from "react-cookie";
// Components
import { Task } from "./Task";
// Images
import AddImage from "../images/add.png";


const Home = () => {
	const [cookies, setCookie] = useCookies(["data"]);

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

	const onload = () => {}

    window.onload = onload;

	return (
		<div>
			<button onClick={() => { window.location = "/createTask" }}
				style={{width: "2.5%", height: "4.5%", marginLeft: "60%", marginTop: "0.9%", backgroundColor: "white", border: "none"}} >
				<img src={ AddImage } alt="Add" style={{marginLeft: "-0.45%", marginTop: "-0.09%"}}></img>
			</button>

			<div>
				{}
			</div>
		</div>
	);
}

export { Home };
