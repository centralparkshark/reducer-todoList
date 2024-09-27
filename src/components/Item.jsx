export default function Item(props) {
    return (
        <div className="item">
            <input type="checkbox" name="task" id="" />
            <div className="title">{props.task}</div>
            <button className=" fa fa-edit"></button>
            <button className=" fa fa-trash" disabled></button>
        </div>
    )
}