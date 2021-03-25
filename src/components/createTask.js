import { useState } from "react";
import { useCookies } from "react-cookie";


const CreateTask = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["data"]);

    const submit = () => {
        const taskName = document.getElementById("taskName").value;
        const taskDescription = document.getElementById("taskDescription").value;

        const updatedTasks = cookies["tasks"];
        updatedTasks.push({
            name: taskName,
            description: taskDescription
        });

        setCookie("tasks", updatedTasks);

        console.log(cookies);
        window.location = "/";
    }

	return (
		<div style={{marginTop: "18%", marginLeft: "42%"}}>
			<input placeholder="Task Name"
                style={{borderRadius: "5px", border: "3px solid black", fontSize: "30px", marginBottom: "1%"}} id="taskName" /><br />
            <input placeholder="Task Description"
                style={{borderRadius: "5px", border: "3px solid black", fontSize: "30px", marginBottom: "1%"}} id="taskDescription" /><br />
            <button type="submit"
                style={{borderRadius: "5px", border: "1px solid black", fontSize: "35px", marginLeft: "9%"}} onClick={ submit }>Submit</button>
		</div>
	);
}

export { CreateTask };
