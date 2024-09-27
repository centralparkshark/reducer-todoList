import { useState } from "react"

export default function Item(props) {
    const [completed, setCompleted] = useState(props.completed)

    return (
        <div className="item" key={props.key}>
            <input type="checkbox" name="task" id="" checked={completed}/>
            <div className="title">{props.title}</div>
            <button className=" fa fa-edit"></button>
            <button className=" fa fa-trash" ></button>
        </div>
    )
}