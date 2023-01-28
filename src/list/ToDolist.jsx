import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const ToDolist = (props) =>{
    const [line,setLine] = useState(false);

    const cutIt = () =>{
        setLine(true);
    }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt} className = "deletIcon"> <DeleteIcon/></span>
                <li style={{textDecoration: line ? "line-through" : "none" }}>  
                {props.text}</li>
            </div>
        </>
    )
}
export default ToDolist;