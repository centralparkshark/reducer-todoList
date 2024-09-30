import { useState } from "react"

export default function Item(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)
    
    const handleEditSubmit = () => {
        props.onEdit(props.id, newTitle)
        setIsEditing(false)
    }
    
    
    return (
        <div className="item">
            <input type="checkbox" name="task" checked={props.completed} onChange={() => props.onToggleComplete(props.id)}/>
            {isEditing ? (<><input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/><button onClick={handleEditSubmit}>Save</button></>) : (<div className="title">{props.title}</div>)}
            <button className=" fa fa-edit" onClick={() => setIsEditing(true)}></button>
            <button className=" fa fa-trash" disabled={!props.completed} onClick={() => props.onDelete(props.id)}></button>
        </div>
    )
}