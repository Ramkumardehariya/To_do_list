import React, { useState } from "react";
import { ImPlus } from 'react-icons/im';
import Button from '@mui/material/Button';
import ToDolist from "./list/ToDolist";

const App = () =>{
    const [Item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);

    const eventItems = (event) =>{
        setItem(event.target.value);
    }

    const changeItem = () =>{
        setNewItem((preValue)=>{
            return [...preValue,Item];
        })
        setItem("");
    }

    return (
    <>
        <div className="main_div">
            <div className="center_div">
               <h1>ToDo List</h1>
               <input value={Item} type="text" placeholder="Add a new Item" onChange={eventItems}></input>
               <Button onClick={changeItem}><ImPlus/></Button>
               <br/>
            <ol>
               {newItem.map((value) =>{
                    return <ToDolist
                        text = {value}
                    />
                }) }
            </ol>
            </div>
        </div>
    </>
    )
}

export default App;