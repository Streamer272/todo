import { useState } from "react";
// Images
import DeleteImage from "../images/delete.png";
import EditImage from "../images/edit.png";


const Task = ({ taskData, deleteCallback, editCallback }) => {
    const [name] = useState(taskData.name);
    const [description] = useState(taskData.description);

    const DeleteTask = () => {
        console.log("Deleting task from task...");
        deleteCallback(taskData);
    }

    const EditTask = () => {
        console.log("Editing task from task...");
        editCallback(taskData);
    }

    return (
        <div style={{backgroundColor: "aliceblue", height: "7.2%", margin: "0.9% auto",
                width: "25%", borderRadius: "5px", border: "1px solid black"}}>
            <h1 style={{textAlign: "center", marginTop: "-0.225%"}}>{ name }</h1>
            <p style={{textAlign: "center", marginTop: "-1.8%"}}>{ description }</p>

            <button style={{float: "right", width: "7%", height: "1.5%", marginTop: "-14%",
                    marginRight: "-0.2%", border: "1px solid black", borderRadius: "5px"}} onClick={ EditTask }>
                <img src={ EditImage } alt="Edit Task" style={{marginLeft: "-15%", marginTop: "5%"}} />
            </button>
            <button style={{float: "right", width: "7%", height: "1.5%", marginTop: "-7%",
                    marginRight: "-0.2%", border: "1px solid black", borderRadius: "5px"}} onClick={ DeleteTask }>
                <img src={ DeleteImage } alt="Delete Task" style={{marginLeft: "-15%", marginTop: "5%"}} />
            </button>
        </div>
    )
}

export { Task };
