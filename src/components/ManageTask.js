import { useCookies } from "react-cookie";


const CreateTask = () => {
	const [cookies, setCookie] = useCookies(["data"]);

    const submit = () => {
        const taskName = document.getElementById("taskName").value;
        const taskDescription = document.getElementById("taskDescription").value;

        const tasks = cookies["tasks"] || [];
        tasks.push({
            name: taskName,
            description: taskDescription
        });

        setCookie("tasks", tasks);

        console.log(cookies);
        window.location = "/";
    }

	return (
		<div style={{marginTop: "18%", marginLeft: "42%"}}>
			<input placeholder="Task Name"
                style={{borderRadius: "5px", border: "3px solid black",
                    fontSize: "30px", marginBottom: "1%", textAlign: "center"}} id="taskName" /><br />
            <input placeholder="Task Description"
                style={{borderRadius: "5px", border: "3px solid black",
                    fontSize: "30px", marginBottom: "1%", textAlign: "center"}} id="taskDescription" /><br />

            <button type="submit"
                style={{borderRadius: "5px", border: "1px solid black",
                    fontSize: "35px", marginLeft: "12%"}} onClick={ submit }>Submit</button>
		</div>
	);
}

const EditTask = () => {
    // url example: /editTask/name=sugma&desc=ligma
    let urlData = window.location.toString().split("/");
    urlData = urlData[urlData.length - 1];
    let nameBefore = urlData.split("&")[0].replace("name=", "");
    let descriptionBefore = urlData.split("&")[1].replace("desc=", "");

    const [cookies, setCookie] = useCookies(["data"]);

    const submit = () => {
        const taskName = document.getElementById("taskName").value;
        const taskDescription = document.getElementById("taskDescription").value;

        const tasks = cookies["tasks"] || [];

        for (const task of tasks) {
            if (task.name === nameBefore && task.description === descriptionBefore) {
                task.name = taskName;
                task.description = taskDescription;
            }
        }

        setCookie("tasks", tasks);

        console.log(cookies);
        window.location = "/";
    }

    window.onload = () => {
        while (nameBefore.includes("%20")) {
            nameBefore = nameBefore.replace("%20", " ");
        }
        while (descriptionBefore.includes("%20")) {
            descriptionBefore = descriptionBefore.replace("%20", " ");
        }

        document.getElementById("taskName").value = nameBefore;
        document.getElementById("taskDescription").value = descriptionBefore;
    }

    return (
        <div style={{marginTop: "18%", marginLeft: "42%"}}>
            <input placeholder="Task Name"
                   style={{borderRadius: "5px", border: "3px solid black",
                       fontSize: "30px", marginBottom: "1%", textAlign: "center"}} id="taskName" /><br />
            <input placeholder="Task Description"
                   style={{borderRadius: "5px", border: "3px solid black",
                       fontSize: "30px", marginBottom: "1%", textAlign: "center"}} id="taskDescription" /><br />

            <button type="submit"
                    style={{borderRadius: "5px", border: "1px solid black",
                        fontSize: "35px", marginLeft: "12%"}} onClick={ submit }>Submit</button>
        </div>
    );
}

export { CreateTask, EditTask };
