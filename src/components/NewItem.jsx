import { useState } from "react";

export default function NewItem(props) {
    const [newTitle, setNewTitle] = useState("");

    const handleAdd = () => {
        props.onAdd(newTitle)
        setNewTitle("")
    }

    return (
        <div className="item">
            <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAdd}>Save</button>
        </div>
    );
}
