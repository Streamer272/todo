import { useState } from "react";
// Images
import deleteImage from "../images/delete.png";


const Task = ({ taskName = "Task Name", taskDescription = "Task description", deleteCallback }) => {
    const [name, setName] = useState(taskName);
    const [description, setDescription] = useState(taskDescription);

    const DeleteTask = () => {
        console.log("Deleing task from task...");
        deleteCallback(this);
    }

    return (
        <div style={{backgroundColor: "aliceblue", height: "80px", margin: "10px auto", width: "500px", borderRadius: "5px", border: "1px solid black"}}>
            <h1 style={{textAlign: "center", marginTop: "-2.5px"}}>{ name }</h1>
            <p style={{textAlign: "center", marginTop: "-20px"}}>{ description }</p>
            <button style={{float: "right", width: "25px", height: "25px"}} onClick={ DeleteTask }>
                <img src={ deleteImage } alt="Delete Task"/>
            </button>
        </div>
    )
}

export { Task };
